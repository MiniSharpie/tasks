import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🌹" | "🎆" | "🎁" | "🎃" | "🦃";
export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎁");

    const HOLIDAY_ALPHABET: Record<Holiday, Holiday> = {
        "🎁": "🎆",
        "🎆": "🎃",
        "🎃": "🦃",
        "🦃": "🌹",
        "🌹": "🎁"
    };
    const HOLIDAY_TIME: Record<Holiday, Holiday> = {
        "🎁": "🌹",
        "🌹": "🎆",
        "🎆": "🎃",
        "🎃": "🦃",
        "🦃": "🎁"
    };

    function changeHolidayByAlphabet(): void {
        const newHoliday = HOLIDAY_ALPHABET[holiday];
        setHoliday(newHoliday);
    }
    function changeHolidayByTime(): void {
        const newHoliday = HOLIDAY_TIME[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <div>Current Holiday: {holiday}</div>
            <div>
                <Button onClick={changeHolidayByAlphabet}>
                    Advance by Alphabet
                </Button>
                <Button onClick={changeHolidayByTime}>Advance by Year</Button>
            </div>
        </div>
    );
}
