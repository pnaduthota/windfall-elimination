import React from "react"
import { ButtonLink, ButtonLinkRed, SEO, ObservableFunction, ObservableDock  } from "../components";

export default () => (
    <>
        <SEO title="Screen 3" />
        <h2>Screen 3!</h2>
        <p>* WEP-Adjusted MPB</p>
        <ObservableDock />
        <p>PIA (slider)</p>
        <p>Visual formula walkthrough?</p>
        <ButtonLinkRed to="/screen-2/">Go back!</ButtonLinkRed>
        <ButtonLink to="/">Go Home</ButtonLink>
    </>
);
