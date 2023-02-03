import React, {useEffect, useState} from "react";
import {useIonViewWillEnter} from "@ionic/react";


interface RelativeDateProps {
    date: Date
}


export const RelativeDate : React.FC<RelativeDateProps> = ({date}: RelativeDateProps) => {

    const [text, setText] = useState("");

    const rtf = new Intl.RelativeTimeFormat("en",{numeric: "auto"});
    const today = new Date();

    const diffTime = Math.abs(date.getTime() - today.getTime());
    const diffWeeks = Math.round(diffTime / (1000 * 60 * 60 * 24 * 7));
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.round(diffTime / (1000 * 60 * 60));
    const diffMinutes = Math.round(diffTime / (1000 * 60));

    useIonViewWillEnter(() => {
        if (diffWeeks > 0) {
            setText(rtf.format(-diffWeeks, "weeks"));
        }
        else if (diffDays > 0) {
            setText(rtf.format(-diffDays, "days"));
        }
        else if (diffHours > 0) {
            setText(rtf.format(-diffHours, "hours"));
        }
        else if (diffMinutes > 0) {
            setText(rtf.format(-diffMinutes, "minutes"));
        }
        else {
            setText(date.toString)
        }
    });

    return (<p>{text}</p>)
}