import React, { Component } from "react";
import "./Textbox.css";
import {
  Link,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SWOT extends Component {
    render() {
        return (
            <div>
                <TextExpanded/>
                <TextExpanded/>
                <TextExpanded/>
                <TextExpanded/>
            </div>
        );
    }
}

export default SWOT;