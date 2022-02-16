import React, { HTMLAttributes, useEffect, useState } from "react";
import { words } from "../words";

type exact = {
  letter: string;
  position: number;
};

export const MainPage = () => {
  const [notFound, setNotFound] = useState("");
  const [found, setFound] = useState("");
  const [exact, setExact] = useState<any>([]);
  const [exactNotFound, setExactNotFound] = useState<any>([]);
  const [possibleWords, setPossibleWords] = useState<any>([]);

  useEffect(() => {
    setPossibleWords(words);
  }, []);

  useEffect(() => {
    findPossibleWords(exact);
  }, [found, notFound]);

  function findPossibleWords(letters?: Array<exact>) {
    let tempArray: Array<string> = words;
    let notFoundArray: Array<string> = notFound.split(",");
    let foundArray: Array<string> = found.split(",");
    if (letters) {
      tempArray = letters[0]
        ? tempArray.filter(
            (word: string) =>
              word.toLowerCase().charAt(letters[0].position) ===
              letters[0].letter.toLowerCase()
          )
        : tempArray;
      tempArray = letters[1]
        ? tempArray.filter(
            (word: string) =>
              word.toLowerCase().charAt(letters[1].position) ===
              letters[1].letter.toLowerCase()
          )
        : tempArray;
      tempArray = letters[2]
        ? tempArray.filter(
            (word: string) =>
              word.toLowerCase().charAt(letters[2].position) ===
              letters[2].letter.toLowerCase()
          )
        : tempArray;
      tempArray = letters[3]
        ? tempArray.filter(
            (word: string) =>
              word.toLowerCase().charAt(letters[3].position) ===
              letters[3].letter.toLowerCase()
          )
        : tempArray;
      tempArray = letters[4]
        ? tempArray.filter(
            (word: string) =>
              word.toLowerCase().charAt(letters[4].position) ===
              letters[4].letter.toLowerCase()
          )
        : tempArray;
      console.log(tempArray);
    }
    if (foundArray.length >= 1) {
      let newArray: Array<string> = [];
      foundArray.forEach((letter) => {
        newArray = tempArray.filter((word: string) =>
          word.toLowerCase().includes(letter.toLowerCase())
        );
      });
      tempArray = newArray;
      console.log(tempArray);
    }
    if (notFoundArray.length >= 1) {
      let newArray: Array<string> = tempArray;
      console.log(notFoundArray);
      notFoundArray.forEach((letter) => {
        newArray = newArray.filter(
          (word: string) => !word.toLowerCase().includes(letter.toLowerCase())
        );
      });
      tempArray = newArray;
      console.log(newArray);
    }
    setPossibleWords(tempArray);
  }

  function handleExactChange(letter: string, position: number) {
    let newArray: Array<exact> = exact;
    newArray.splice(position, 0, { letter, position });
    setExact(newArray);
    console.log(newArray);
    findPossibleWords(newArray);
  }

  function handleExactNotFound(letter: string, position: number) {
    let newArray: Array<exact> = exact;
    newArray.splice(position, 0, { letter, position });
    setExactNotFound(newArray);
    console.log(newArray);
    findPossibleWords(newArray);
  }

  return (
    <>
      <div>
        <h3>
          Digite aqui as letras encontradas, mesmo que fora de ordem, separadas
          por virgula
        </h3>
        <input
          maxLength={5}
          onChange={(e) => setFound(e.target.value)}
          type="text"
        />
        <br />
        <h3>Digite aqui as letras encontradas em ordem</h3>
        1-{" "}
        <input
          maxLength={1}
          onChange={(e) => handleExactChange(e.target.value, 0)}
          type="text"
        />
        <br />
        2-{" "}
        <input
          maxLength={1}
          onChange={(e) => handleExactChange(e.target.value, 1)}
          type="text"
        />
        <br />
        3-{" "}
        <input
          maxLength={1}
          onChange={(e) => handleExactChange(e.target.value, 2)}
          type="text"
        />
        <br />
        4-{" "}
        <input
          maxLength={1}
          onChange={(e) => handleExactChange(e.target.value, 3)}
          type="text"
        />
        <br />
        5-{" "}
        <input
          maxLength={1}
          onChange={(e) => handleExactChange(e.target.value, 4)}
          type="text"
        />
        <h3>Digite aqui as letras nao encontradas</h3>
        <input type="text" onChange={(e) => setNotFound(e.target.value)} />
        <h3>Digite aqui as letras que vc sabe que nao sao na posicao</h3>
        1-{" "}
        <input
          maxLength={1}
          onChange={(e) => handleExactNotFound(e.target.value, 0)}
          type="text"
        />
        <br />
        2-{" "}
        <input
          maxLength={1}
          onChange={(e) => handleExactNotFound(e.target.value, 1)}
          type="text"
        />
        <br />
        3-{" "}
        <input
          maxLength={1}
          onChange={(e) => handleExactNotFound(e.target.value, 2)}
          type="text"
        />
        <br />
        4-{" "}
        <input
          maxLength={1}
          onChange={(e) => handleExactNotFound(e.target.value, 3)}
          type="text"
        />
        <br />
        5-{" "}
        <input
          maxLength={1}
          onChange={(e) => handleExactNotFound(e.target.value, 4)}
          type="text"
        />
      </div>
      <br />
      <br />
      <br />
      <div>Possiveis palavras:</div>
      <div style={{ maxWidth: "400px" }}>{possibleWords + ", "}</div>
    </>
  );
};
