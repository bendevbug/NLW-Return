import { CloseButton } from "../CloseButton";
import { useState } from "react";
import lightImage from '../../assets/emoji.png';
import ideiaImage from '../../assets/thought.png';
import bugImage from '../../assets/vector.png';
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";



export const feedbackTypes = {
    BUG: {
      title: 'Problema', 
      image: {
          source: bugImage,
          alt: 'imagem inseto'
      }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideiaImage,
            alt: 'imagem de lâmpada'
        }

    },
    OTHER: {
        title: 'Outro',
        image: {
            source: lightImage,
            alt: 'imagem de um balão de pensamento'
        }
    }
};


export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)


    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
        <header>
            <span className="text-xl leading-6"></span>

                <CloseButton />
        </header>

        {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            
        ) : (
            <FeedbackContentStep feedbackType={feedbackType}/>
        )}

        <footer className="text-xs text-neutral-100 ">
        Feito com amor pela <a href="" className="underline">RocketSeat</a>
        </footer>
         
        </div>
    );
}