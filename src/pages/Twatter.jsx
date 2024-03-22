import React, { useRef, useState } from 'react';

const Twatter = () => {
    // time stuff for hardcoded first twat
    const dayjs = require('dayjs');
    const timeJS = Date.now();
    const timeAlreadySet = dayjs(timeJS).format('dddd h:mmA');

    // useStates
    const [twats, setTwats] = useState([]); // save twats to array

    // useRefs
    const inputRef = useRef({ username: "", message: "" }); // one ref for usernames and messages
    const emptyUsernameRef = useRef(); // use this ref to empty username input
    const emptyMessageRef = useRef(); // this ref empty's message textarea

    const handleSubmit = (e) => {
        e.preventDefault();
        const time = new Date();
        setTwats([...twats, { username: inputRef.current.username, message: inputRef.current.message, time }]);
        inputRef.current.username = "";
        inputRef.current.message = "";
        emptyUsernameRef.current.value = "";
        emptyMessageRef.current.value = "";
    }

	return (
        <main className='container'>
            <section className="row justify-content-center mt-5">
                <div className="card shadow mb-2" style={{ width: "25rem" }}>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input ref={emptyUsernameRef} type="text" name="username" id="username" className='form-control' onChange={(e) => (inputRef.current.username = e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className='form-control' name="message" id="message" cols="30" rows="5" ref={emptyMessageRef} onChange={(e) => (inputRef.current.message = e.target.value)} required></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary mt-1">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* hardcoded first twat lol */}
            <section className="row justify-content-center">
				<div className="card shadow mb-3 chirp" style={{ width: "25rem" }}>
					<div className="card-body">
						<h5 className="card-body" style={{ textAlign: "left" }}>
							@Jivemachine
						</h5>
						<p className="card-text" style={{ textAlign: "left" }}>
							My first twat!
						</p>
						<footer className="footer" style={{ textAlign: "right" }}>
							<small style={{ color: "#808080" }}>Twatted {timeAlreadySet}</small>
						</footer>
					</div>
				</div>
			</section>
            {twats.map((twat, index) => (
				<section className="row justify-content-center">
					<div className="card shadow mb-3 chirp" style={{ width: "25rem" }} key={index}>
						<div className="card-body">
							<h5 className="card-body" style={{ textAlign: "left" }}>
								@{twat.username}
							</h5>
							<p className="card-text" style={{ textAlign: "left" }}>
								{twat.message.split("\n").map((line, index) => (
									<React.Fragment key={index}>
										{line}
										<br />
									</React.Fragment>
								))}
							</p>
							<footer className="footer" style={{ textAlign: "right" }}>
								<small style={{ color: "#808080" }}>Twatted at {dayjs(twat.time).format("dddd h:mmA")}</small>
							</footer>
						</div>
					</div>
				</section>
			))}
        </main>
	);
};

export default Twatter;
