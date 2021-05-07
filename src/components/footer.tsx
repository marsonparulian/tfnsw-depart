// Dummy comment 
import React from "react";

type propsType = {};
/**
 * <Footer /> component
 */
const Footer: React.FC<propsType> = () => {

    //Render
    return (
        <footer>
            Powered by <a href="https://glitch.com" target="_blank">glitch.com</a>
            <dl>
                <dt>About This App</dt>
                <dd>This  simple dmo app allows user to select a stop (train, bus,etc) &amp; display the corresponding departures from the stop.</dd>

                <dt>Data: Stops &amp; Departures</dt>
                <dd>The stop list &amp; departure list fetched from NSW <strong>trip planner API</strong> through a proxy server </dd>
                <dt>Front End</dt>
                <dd>
                    The FE is built using : <code>Typescript</code>, <code>react</code>, &amp; <code>react-select-search</code> component.
                </dd>

                <dt>Back End</dt>
                <dd>
                    The BE is a proxy server, channeling request from FE to <strong>trip planner API</strong> &amp; return the response directly back to FE.
                    The BE is built using : <code>typescript</code> and <code>express</code>.
                </dd>
            </dl>

        </footer>
    )
};

export default Footer;
