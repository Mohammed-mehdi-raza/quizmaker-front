import React from "react";
import QuizIcon from '@mui/icons-material/Quiz';
import {Typography} from '@mui/material';
import './Footer.css';

function Footer(){
    return(
        <div className="footer">
            <div>
                <div>
                    <Typography variant="h4">
                        <QuizIcon/>&nbsp;
                        QuizMaker
                    </Typography><br/>
                </div>
                <div>
                    <Typography vaariant="p">&copy; 2022,All Rights Reserved</Typography>
                </div>
            </div>
        </div>
    );
}

export default Footer;