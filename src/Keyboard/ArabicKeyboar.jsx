import React, { Component } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import axios from 'axios';
import "./Keyboard.css";






class ArabicKeyboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            layoutName: "default",
            input: "",
            width: 0,
            height: 0,
            data: []
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }


    onHandleSubmit() {
        let name = this.state.input;
        axios.get(`http://localhost:8082/api/employees?name=${name}`).then(res => {
            console.log(res.data)
            this.setState({
                data: res.data
            })
        })
    }


    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    commonKeyboardOptions = {
        onChange: input => this.onChange(input),
        onKeyPress: button => this.onKeyPress(button),
        theme: "simple-keyboard hg-theme-default hg-layout-default",
        physicalKeyboardHighlight: true,
        syncInstanceInputs: true,
        mergeDisplay: true,
        debug: true
    };

    keyboardOptions = {
        ...this.commonKeyboardOptions,
        /**
         * Layout by:
         * Sterling Butters (https://github.com/SterlingButters)
         */
        layout: {
            default: [
                "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
                "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
                "{tab} ض ص ث ق ف غ ع ه خ ح ج د \\",
                "{capslock} ش س ي ب ل ا ت ن م ك ط {enter}",
                "{shiftleft} ئ ء ؤ ر لا ى ة و ز ظ {shiftright}",
                "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}"
            ],
            shift: [
                "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
                "~ ! @ # $ % ^ & * ( ) _ + {backspace}",
                "{tab} ض ص ث ق ف غ ع ه خ ح ج ج |",
                '{capslock} ش س ي ب ل ا ت ن م ك ط {enter}',
                "{shiftleft} ئ ء ؤ ر لا ى ة و ز ظ {shiftright}",
                "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}"
            ]
        },
        display: {
            "{escape}": "esc ⎋",
            "{tab}": "tab ⇥",
            "{backspace}": "backspace ⌫",
            "{enter}": "enter ↵",
            "{capslock}": "caps lock ⇪",
            "{shiftleft}": "shift ⇧",
            "{shiftright}": "shift ⇧",
            "{controlleft}": "ctrl ⌃",
            "{controlright}": "ctrl ⌃",
            "{altleft}": "alt ⌥",
            "{altright}": "alt ⌥",
            "{metaleft}": "cmd ⌘",
            "{metaright}": "cmd ⌘"
        }
    };

    keyboardControlPadOptions = {
        ...this.commonKeyboardOptions,
        layout: {
            default: [
                "{prtscr} {scrolllock} {pause}",
                "{insert} {home} {pageup}",
                "{delete} {end} {pagedown}"
            ]
        }
    };

    keyboardArrowsOptions = {
        ...this.commonKeyboardOptions,
        layout: {
            default: ["{arrowup}", "{arrowleft} {arrowdown} {arrowright}"]
        }
    };

    keyboardNumPadOptions = {
        ...this.commonKeyboardOptions,
        layout: {
            default: [
                "{numlock} {numpaddivide} {numpadmultiply}",
                "{numpad7} {numpad8} {numpad9}",
                "{numpad4} {numpad5} {numpad6}",
                "{numpad1} {numpad2} {numpad3}",
                "{numpad0} {numpaddecimal}"
            ]
        }
    };

    keyboardNumPadEndOptions = {
        ...this.commonKeyboardOptions,
        layout: {
            default: ["{numpadsubtract}", "{numpadadd}", "{numpadenter}"]
        }
    };

    onChange = input => {
        this.setState({
            input: input
        });
        console.log("Input changed", input);
    };

    onKeyPress = button => {
        console.log("Button pressed", button);

        /**
         * If you want to handle the shift and caps lock buttons
         */
        if (
            button === "{shift}" ||
            button === "{shiftleft}" ||
            button === "{shiftright}" ||
            button === "{capslock}"
        ) {
            this.handleShift();
        }
    };

    handleShift = () => {
        let layoutName = this.state.layoutName;

        this.setState({
            layoutName: layoutName === "default" ? "shift" : "default"
        });
    };

    onChangeInput = event => {
        let input = event.target.value;
        this.setState(
            {
                input: input
            },
            () => {
                this.keyboard.setInput(input);
            }
        );
    };

    render() {
        return (
            <div>
                <Box p={2}>
                    <Grid container direction="row" spacing={3}>
                        <Grid item lg={6} sm={6} xs={12}>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                            }}>
                                <Paper component="form"  style={{ height: '50px', display: 'flex', padding: '0px 14px', justifyContent: 'space-between' }}>
                                    <InputBase
                                        value={this.state.input}
                                        style={{ width: '80%', fontSize: 20, fontWeight: 'bold' }}
                                        placeholder="Enter Arabic Word"
                                        inputProps={{ 'aria-label': 'search google maps' }}
                                        onChange={e => this.onChangeInput(e)}
                                    />
                                    <IconButton type="submit" aria-label="search" onClick={() => this.onHandleSubmit()}>
                                        <SearchIcon />
                                    </IconButton>
                                </Paper>
                            </form>
                        </Grid>
                        <Grid item lg={6} sm={6} xs={12}>
                            <Paper component="form" style={{ height: '50px' }}>
                                <Box p={1} style={{ color: 'grey', fontSize: 20, fontWeight: 'bold' }}>
                                    {
                                        this.state.data.map((element, index) => {
                                            return element.lastName;
                                        })
                                    }
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
                {
                    this.state.width >= 1120 ? <div className={"keyboardContainer"} >
                        <Keyboard
                            baseClass={"simple-keyboard-main"}
                            keyboardRef={r => (this.keyboard = r)}
                            layoutName={this.state.layoutName}
                            {...this.keyboardOptions}
                        />

                        <div className="controlArrows">
                            <Keyboard
                                baseClass={"simple-keyboard-control"}
                                {...this.keyboardControlPadOptions}
                            />
                            <Keyboard
                                baseClass={"simple-keyboard-arrows"}
                                {...this.keyboardArrowsOptions}
                            />
                        </div>

                        <div className="numPad">
                            <Keyboard
                                baseClass={"simple-keyboard-numpad"}
                                {...this.keyboardNumPadOptions}
                            />
                            <Keyboard
                                baseClass={"simple-keyboard-numpadEnd"}
                                {...this.keyboardNumPadEndOptions}
                            />
                        </div>
                    </div> : null
                }
            </div>
        );
    }
}

export default ArabicKeyboard;
