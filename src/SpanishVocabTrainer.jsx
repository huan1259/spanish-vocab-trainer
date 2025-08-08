import React, { useState } from 'react';
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const vocabulary = [
  { spanish: "palabra1", english: "meaning1" },
  { spanish: "palabra2", english: "meaning2" },
  { spanish: "palabra3", english: "meaning3" },
  // ... more words ...
  { spanish: "palabra1999", english: "meaning1999" },
  { spanish: "palabra2000", english: "meaning2000" }
];

export default function SpanishVocabTrainer() {
  const [index, setIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

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
        <Button onClick={nextWord}>Next</Button>
      </div>
    </div>
  );
}
