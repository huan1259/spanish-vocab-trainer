import React, { useState } from 'react';
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const vocabulary = [
  { spanish: "de", english: "of, from" },
  { spanish: "la", english: "the (fem.)" },
  { spanish: "el", english: "the (masc.)" },
  { spanish: "los", english: "the (masc. pl.)" },
  { spanish: "las", english: "the (fem. pl.)" },
  { spanish: "un", english: "a, an (masc.)" },
  { spanish: "una", english: "a, an (fem.)" },
  { spanish: "y", english: "and" },
  { spanish: "o", english: "or" },
  { spanish: "pero", english: "but" },
  { spanish: "porque", english: "because" },
  { spanish: "si", english: "if" },
  { spanish: "que", english: "that, which" },
  { spanish: "como", english: "like, as; how" },
  { spanish: "cuando", english: "when" },
  { spanish: "donde", english: "where" },
  { spanish: "qué", english: "what" },
  { spanish: "quién", english: "who" },
  { spanish: "cuál", english: "which" },
  { spanish: "cuánto", english: "how much/many" },
  { spanish: "en", english: "in, on" },
  { spanish: "a", english: "to, at" },
  { spanish: "con", english: "with" },
  { spanish: "sin", english: "without" },
  { spanish: "por", english: "by, through, for" },
  { spanish: "para", english: "for, in order to" },
  { spanish: "sobre", english: "on, about" },
  { spanish: "entre", english: "between, among" },
  { spanish: "hasta", english: "until, up to" },
  { spanish: "desde", english: "since, from" },
  { spanish: "muy", english: "very" },
  { spanish: "más", english: "more" },
  { spanish: "menos", english: "less" },
  { spanish: "también", english: "also" },
  { spanish: "solo", english: "only, alone" },
  { spanish: "ya", english: "already, now" },
  { spanish: "aquí", english: "here" },
  { spanish: "allí", english: "there" },
  { spanish: "sí", english: "yes" },
  { spanish: "no", english: "no, not" },
  { spanish: "hola", english: "hello" },
  { spanish: "adiós", english: "goodbye" },
  { spanish: "por favor", english: "please" },
  { spanish: "gracias", english: "thank you" },
  { spanish: "de nada", english: "you're welcome" },
  { spanish: "buenos días", english: "good morning" },
  { spanish: "buenas tardes", english: "good afternoon" },
  { spanish: "buenas noches", english: "good night" },
  { spanish: "¿cómo estás?", english: "how are you?" },
  { spanish: "bien", english: "well, fine" },
  { spanish: "mal", english: "bad(ly)" },
  { spanish: "lo siento", english: "I'm sorry" },
  { spanish: "disculpa", english: "excuse me (informal)" },
  { spanish: "permiso", english: "excuse me (to pass)" },
  { spanish: "yo", english: "I" },
  { spanish: "tú", english: "you (informal)" },
  { spanish: "usted", english: "you (formal)" },
  { spanish: "él", english: "he" },
  { spanish: "ella", english: "she" },
  { spanish: "nosotros", english: "we (masc.)" },
  { spanish: "nosotras", english: "we (fem.)" },
  { spanish: "ellos", english: "they (masc.)" },
  { spanish: "ellas", english: "they (fem.)" },
  { spanish: "mi", english: "my" },
  { spanish: "tu", english: "your (informal)" },
  { spanish: "su", english: "his/her/your (formal)/their" },
  { spanish: "este", english: "this (masc.)" },
  { spanish: "esta", english: "this (fem.)" },
  { spanish: "ese", english: "that (masc.)" },
  { spanish: "esa", english: "that (fem.)" },
  { spanish: "ser", english: "to be (essential)" },
  { spanish: "estar", english: "to be (state)" },
  { spanish: "tener", english: "to have" },
  { spanish: "hacer", english: "to do, make" },
  { spanish: "poder", english: "to be able to" },
  { spanish: "ir", english: "to go" },
  { spanish: "decir", english: "to say, tell" },
  { spanish: "ver", english: "to see" },
  { spanish: "dar", english: "to give" },
  { spanish: "saber", english: "to know (facts)" },
  { spanish: "conocer", english: "to know (people/places)" },
  { spanish: "querer", english: "to want, love" },
  { spanish: "venir", english: "to come" },
  { spanish: "poner", english: "to put" },
  { spanish: "tomar", english: "to take, drink" },
  { spanish: "hablar", english: "to speak" },
  { spanish: "pensar", english: "to think" },
  { spanish: "trabajar", english: "to work" },
  { spanish: "vivir", english: "to live" },
  { spanish: "comer", english: "to eat" },
  { spanish: "beber", english: "to drink" },
  { spanish: "necesitar", english: "to need" },
  { spanish: "gustar", english: "to like" },
  { spanish: "comprar", english: "to buy" },
  { spanish: "pagar", english: "to pay" },
  { spanish: "abrir", english: "to open" },
  { spanish: "cerrar", english: "to close" },
  { spanish: "leer", english: "to read" },
  { spanish: "escribir", english: "to write" },
  { spanish: "caminar", english: "to walk" },
  { spanish: "venir", english: "to come" },
  { spanish: "tiempo", english: "time, weather" },
  { spanish: "año", english: "year" },
  { spanish: "día", english: "day" },
  { spanish: "cosa", english: "thing" },
  { spanish: "persona", english: "person" },
  { spanish: "hombre", english: "man" },
  { spanish: "mujer", english: "woman" },
  { spanish: "niño", english: "boy, child" },
  { spanish: "niña", english: "girl, child" },
  { spanish: "casa", english: "house, home" },
  { spanish: "agua", english: "water" },
  { spanish: "trabajo", english: "work, job" },
];

export default function SpanishVocabTrainer() {
  const [index, setIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const prevWord = () => {
    setIndex((prev) => (prev - 1 + vocabulary.length) % vocabulary.length);
    setShowTranslation(false);
  };

  const nextWord = () => {
    setIndex((prev) => (prev + 1) % vocabulary.length);
    setShowTranslation(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4">
      <h1 className="text-2xl font-bold">Spanish Vocabulary Trainer</h1>
      <Card className="w-full max-w-md text-center">
        <CardContent className="p-6">
          <p className="text-xl">{vocabulary[index].spanish}</p>
          {showTranslation && (
            <p className="mt-2 text-gray-600">{vocabulary[index].english}</p>
          )}
        </CardContent>
      </Card>
      <div className="flex gap-4">
        <Button onClick={() => setShowTranslation(true)}>Show Translation</Button>
        <Button onClick={prevWord}>Previous</Button>
        <Button onClick={nextWord}>Next</Button>
      </div>
    </div>
  );
}
