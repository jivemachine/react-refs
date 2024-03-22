import { useRef, useState } from 'react';

const Twatter = () => {
    const dayjs = require('dayjs');
    const timeJS = Date.now();
    const timeAlreadySet = dayjs(timeJS).format('YYYY-MM-DD HH:mm:ss');


	return (
        <main className='container'>
            <section className="row justify-content-center mt-5">
                <div className="card shadow mb-2">
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="5"></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary"></button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
	);
};

export default Twatter;
