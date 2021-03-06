import React, { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import cloneDeep from "lodash.clonedeep";
import { UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, INITIAL_DATA } from "./utils/consts";
import useEvent from "./hooks/useEvent";
import useLocalStorage from './hooks/useLocalStorage';
import initialize from "./utils/initialize";
import addNumber from "./utils/addNumber";
import isExist from './utils/isExist';
import blockMovementPlayAudio from './utils/audio';
import disableScrolling from './utils/disableScrolling';
import Block from "./components/Block";
import GameDescription from "./components/GameDescription";
import GameOver from "./components/GameOver";
import Head from "./components/Head";
import VolumeMenu from "./components/VolumeMenu";
import BoardSize from "./components/BoardSize";
import ActionPanel from "./components/ActionPanel";
import Footer from "./components/Footer";
import "./style/style.css";

function App() {

  const [data, setData] = useLocalStorage('data', INITIAL_DATA);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useLocalStorage('score', 0);
  const [best, setBest] = useLocalStorage('best', 0);
  const [scoreHistory, setScoreHistory] = useLocalStorage('scoreHistory', []);
  const [newGame, setNewGame] = useLocalStorage('newGame', true);
  const [isWon, setIsWon] = useLocalStorage('isWon', false);
  const [moveHistory, setMoveHistory] = useLocalStorage('moveHistory', []);
  const [undoMoves, setUndoMoves] = useLocalStorage('undoMoves', []);
  const [replayStatus, setReplayStatus] = useLocalStorage(
    'replayStatus',
    false
  );
  const [value, setValue] = useState(0.2);

  function handleChildClick(vol) {
    setValue(vol);
  }

  //Swipe 
  const swipeLeft = (isMove = true) => {
    let oldGrid = data;
    let newArray = cloneDeep(data);

    if (replayStatus) {
      return;
    }

    if (undoMoves.length) {
      setUndoMoves([]);
    }

    for (let i = 0; i < 4; i++) {
      let b = newArray[i];
      let slow = 0;
      let fast = 1;
      while (slow < 4) {
        if (fast === 4) {
          fast = slow + 1;
          slow++;
          continue;
        }
        if (b[slow] === 0 && b[fast] === 0) {
          fast++;
        } else if (b[slow] === 0 && b[fast] !== 0) {
          b[slow] = b[fast];
          b[fast] = 0;
          fast++;
        } else if (b[slow] !== 0 && b[fast] === 0) {
          fast++;
        } else if (b[slow] !== 0 && b[fast] !== 0) {
          if (b[slow] === b[fast]) {
            b[slow] = b[slow] + b[fast];
            setScore(score + b[slow]);
            b[fast] = 0;
            fast = slow + 1;
            slow++;
          } else {
            slow++;
            fast = slow + 1;
          }
        }
      }
    }
    if (JSON.stringify(oldGrid) !== JSON.stringify(newArray)) {
      setMoveHistory([...moveHistory, oldGrid]);
      if (isExist(newArray, 2048)) {
        setIsWon(true);
        setData(newArray);
      } else addNumber(newArray);
    } else if (!isExist(oldGrid) && isMove && checkGameOver()) {
      setGameOver(true);
    }
    if (isMove) {
      setData(newArray);
    } else return newArray;
  };

  const swipeRight = (isMove = true) => {
    let oldGrid = data;
    let newArray = cloneDeep(data);

    if (replayStatus) {
      return;
    }

    if (undoMoves.length) {
      setUndoMoves([]);
    }

    for (let i = 3; i >= 0; i--) {
      let b = newArray[i];
      let slow = b.length - 1;
      let fast = slow - 1;
      while (slow > 0) {
        if (fast === -1) {
          fast = slow - 1;
          slow--;
          continue;
        }
        if (b[slow] === 0 && b[fast] === 0) {
          fast--;
        } else if (b[slow] === 0 && b[fast] !== 0) {
          b[slow] = b[fast];
          b[fast] = 0;
          fast--;
        } else if (b[slow] !== 0 && b[fast] === 0) {
          fast--;
        } else if (b[slow] !== 0 && b[fast] !== 0) {
          if (b[slow] === b[fast]) {
            b[slow] = b[slow] + b[fast];
            setScore(score + b[slow]);
            b[fast] = 0;
            fast = slow - 1;
            slow--;
          } else {
            slow--;
            fast = slow - 1;
          }
        }
      }
    }
    if (JSON.stringify(newArray) !== JSON.stringify(oldGrid)) {
      setMoveHistory([...moveHistory, oldGrid]);
      if (isExist(newArray, 2048)) {
        setIsWon(true);
        setData(newArray);
      } else addNumber(newArray);
    } else if (!isExist(oldGrid) && isMove && checkGameOver()) {
      setGameOver(true);
    }
    if (isMove) {
      setData(newArray);
    } else return newArray;
  };

  const swipeDown = (isMove = true) => {
    let b = cloneDeep(data);
    let oldData = JSON.parse(JSON.stringify(data));

    if (replayStatus) {
      return;
    }
    if (undoMoves.length) {
      setUndoMoves([]);
    }

    for (let i = 3; i >= 0; i--) {
      let slow = b.length - 1;
      let fast = slow - 1;
      while (slow > 0) {
        if (fast === -1) {
          fast = slow - 1;
          slow--;
          continue;
        }
        if (b[slow][i] === 0 && b[fast][i] === 0) {
          fast--;
        } else if (b[slow][i] === 0 && b[fast][i] !== 0) {
          b[slow][i] = b[fast][i];
          b[fast][i] = 0;
          fast--;
        } else if (b[slow][i] !== 0 && b[fast][i] === 0) {
          fast--;
        } else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
          if (b[slow][i] === b[fast][i]) {
            b[slow][i] = b[slow][i] + b[fast][i];
            setScore(score + b[slow][i]);
            b[fast][i] = 0;
            fast = slow - 1;
            slow--;
          } else {
            slow--;
            fast = slow - 1;
          }
        }
      }
    }
    if (JSON.stringify(b) !== JSON.stringify(oldData)) {
      setMoveHistory([...moveHistory, oldData]);
      if (isExist(b, 2048)) {
        setIsWon(true);
        setData(b);
      } else addNumber(b);
    } else if (!isExist(oldData) && isMove && checkGameOver()) {
      setGameOver(true);
    }
    if (isMove) {
      setData(b);
    } else return b;
  };

  const swipeUp = (isMove = true) => {
    let b = cloneDeep(data);
    let oldData = JSON.parse(JSON.stringify(data));

    if (replayStatus) {
      return;
    }

    if (undoMoves.length) {
      setUndoMoves([]);
    }

    for (let i = 0; i < 4; i++) {
      let slow = 0;
      let fast = 1;
      while (slow < 4) {
        if (fast === 4) {
          fast = slow + 1;
          slow++;
          continue;
        }
        if (b[slow][i] === 0 && b[fast][i] === 0) {
          fast++;
        } else if (b[slow][i] === 0 && b[fast][i] !== 0) {
          b[slow][i] = b[fast][i];
          b[fast][i] = 0;
          fast++;
        } else if (b[slow][i] !== 0 && b[fast][i] === 0) {
          fast++;
        } else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
          if (b[slow][i] === b[fast][i]) {
            b[slow][i] = b[slow][i] + b[fast][i];
            setScore(score + b[slow][i]);
            b[fast][i] = 0;
            fast = slow + 1;
            slow++;
          } else {
            slow++;
            fast = slow + 1;
          }
        }
      }
    }
    if (JSON.stringify(oldData) !== JSON.stringify(b)) {
      setMoveHistory([...moveHistory, oldData]);
      if (isExist(b, 2048)) {
        setIsWon(true);
        setData(b);
      } else addNumber(b);
    } else if (!isExist(oldData) && isMove && checkGameOver()) {
      setGameOver(true);
    }
    if (isMove) {
      setData(b);
    } else return b;
  };

  // Check Gameover
  const checkGameOver = () => {
    if (JSON.stringify(data) !== JSON.stringify(swipeLeft(false))) {
      return false;
    } else if (JSON.stringify(data) !== JSON.stringify(swipeRight(false))) {
      return false;
    } else if (JSON.stringify(data) !== JSON.stringify(swipeUp(false))) {
      return false;
    } else if (JSON.stringify(data) !== JSON.stringify(swipeDown(false))) {
      return false;
    } else return true;
  };

  const handleKeyDown = (event) => {
    if (gameOver) {
      return;
    }
    switch (event.keyCode) {
      case UP_ARROW:
        swipeUp();
        blockMovementPlayAudio(value);
        break;
      case DOWN_ARROW:
        swipeDown();
        blockMovementPlayAudio(value);
        break;
      case LEFT_ARROW:
        swipeLeft();
        blockMovementPlayAudio(value);
        break;
      case RIGHT_ARROW:
        swipeRight();
        blockMovementPlayAudio(value);
        break;
      default:
        break;
    }
  };

  // Reset
  const resetGame = () => {
    setGameOver(false);
    const emptyGrid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    setScoreHistory([...scoreHistory, score]);
    addNumber(emptyGrid);
    addNumber(emptyGrid);
    setData(emptyGrid);
    setReplayStatus(false);
    setScore(0);
    setIsWon(false);
    setMoveHistory([]);
    setUndoMoves([]);
  };

  // Undo
  const onClickUndo = () => {
    const history = cloneDeep(moveHistory);
    const lastMove = history.pop();
    setMoveHistory(history);
    setUndoMoves([...undoMoves, data]);
    setData(lastMove);
  };

  // Replay
  const onClickReplay = () => {
    setReplayStatus(true);
    const history = cloneDeep(moveHistory);
    history.push(data);
    for (let i = 0; i < history.length; i++) {
      setTimeout(() => {
        console.log('replay in progress', i);
        setData(history[i]);
        if (i === history.length - 1) {
          setReplayStatus(false);
        }
      }, i * 1000);
    }
  };

  // Redo
  const onClickRedo = () => {
    const history = cloneDeep(moveHistory);
    const uMoves = cloneDeep(undoMoves);
    const nextMove = uMoves.pop();
    history.push(data);
    setMoveHistory(history);
    setUndoMoves(uMoves);
    setData(nextMove);
  };

  useEffect(() => {
    if (newGame) {
      initialize(data, setData, setNewGame);
    }
  }, [newGame]);

  useEffect(() => {
    setBest(Math.max(...scoreHistory, score));
  }, [score]);


  useEvent("keydown", handleKeyDown);

  return (
    disableScrolling(),
    <div className="App">
      <div
        className={"content"}
      >
        <Head
          score={score}
          reset={resetGame}
          best={best}
        />
        <div
          className={"playing_aield"}
        >
          {gameOver && (
            <GameOver reset={resetGame} />
          )}
          <Swipe
            onSwipeDown={() => swipeDown()}
            onSwipeLeft={() => swipeLeft()}
            onSwipeRight={() => swipeRight()}
            onSwipeUp={() => swipeUp()}
            style={{ overflowY: "hidden" }}
          >
            {data.map((row, oneIndex) => {
              return (
                <div style={{ display: "flex" }} key={oneIndex}>
                  {row.map((digit, index) => (
                    <Block num={digit} key={index} />
                  ))}
                </div>
              );
            })}
          </Swipe>
        </div>
        <GameDescription />
        <VolumeMenu onChildClick={handleChildClick} />
        <ActionPanel
          onClickUndo={onClickUndo}
          disableUndo={!moveHistory.length || replayStatus || isWon}
          onClickReplay={onClickReplay}
          disableReplay={replayStatus || !moveHistory.length}
        />
        <BoardSize />
        <Footer />
      </div>
    </div>
  );
}

export default App;
