import { useEffect, useState, useRef } from "react";

const Home = () => {
	// use States
	const [pokemon, setPokemon] = useState([]); // pokemons array!
	const [currentCardIndex, setCurrentCardIndex] = useState(0); // keep track of card to traverse cards as buttons are clicked
	const [isCntClicked, setIsCntClicked] = useState(false); // when count button is clicked remove cards from state
	const [buttonsDisabled, setButtonsDisabled] = useState(false); // when last card button is clicked diable buttons

	// use Ref
	const buttonsRef = useRef({ good: 0, noGood: 0 }); // keep track of count

	// function disables buttons
	const disableButtons = () => {
		setButtonsDisabled(true);
	};

	// handle display count
	const handleDisplayCount = () => {
		setIsCntClicked(true);
		setButtonsDisabled(true);
	};

	// handle button click func
	const handleButtonClick = (buttonType) => {
		buttonsRef.current[buttonType]++;
		console.log(buttonsRef.current); // log count

		setCurrentCardIndex((prevIndex) => {
			if (prevIndex < pokemon.length - 1) {
				return prevIndex + 1; // move to enxt card
			} else {
				disableButtons();
				return prevIndex; // stay at last card & disable buttons
			}
		});
	};

	// fetch json pokemon data
	useEffect(() => {
		const fetchPokemon = async (id) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const pokemonData = await response.json();
            return pokemonData;
        };

        const fetchAllPokemon = async () => {
            const pokemonPromises = [];
            for (let i = 1; i <= 10; i++) {
                pokemonPromises.push(fetchPokemon(i));
            }
            const pokemon = await Promise.all(pokemonPromises);
            setPokemon(pokemon);
        };

        fetchAllPokemon();
	}, []);

	return (
		<main className="container">
			<section className="row justify-content-center mt-5">
				{isCntClicked && (
					<div className="card shadow mb-5">
						<div className="card-body">
							<h4 className="card-title">Button Click Counts</h4>
							<p className="card-text">Good: {buttonsRef.current.good}</p>
							<p className="card-text">No Good: {buttonsRef.current.noGood}</p>
						</div>
					</div>
				)}
				{!isCntClicked && pokemon.length > 0 && (
					<div className="col-12" key={`pokemon-card-${pokemon[currentCardIndex].id}`}>
						<div className="card shadow" style={{ marginTop: "5rem", marginBottom: "0.5rem" }}>
							<div className="card-body">
								<h4 className="card-title">{pokemon[currentCardIndex].name}</h4>
								<p className="card-subtitle text-muted">Type: {pokemon[currentCardIndex].types[0].type.name}</p>
								<p className="card-text">
									Weight: {pokemon[currentCardIndex].weight}lbs | Height: {pokemon[currentCardIndex].height}ft.
								</p>
								<button name="goodBtn" id="goodBtn" className="btn btn-outline-primary m-1" onClick={() => handleButtonClick("good")} disabled={buttonsDisabled}>
									I love this pokemon!
								</button>
								<button name="noGoodBtn" id="noGoodBtn" className="btn btn-outline-danger" onClick={() => handleButtonClick("noGood")} disabled={buttonsDisabled}>
									I hate this pokemon!
								</button>
							</div>
						</div>
					</div>
				)}
				<div>
					<button className="btn btn-dark" onClick={handleDisplayCount}>
						COUNT EM' UP!
					</button>
				</div>
			</section>
		</main>
	);
};

export default Home;
