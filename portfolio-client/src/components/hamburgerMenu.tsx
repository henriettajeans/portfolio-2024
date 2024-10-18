import { useEffect, useRef, useState } from "react"
import '../styles/header.scss';

export const HamburgerToggle = () => {
    let [toggleForm, setToggleForm] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setToggleForm(false);
        }
    };

    useEffect(() => {
        if (toggleForm) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggleForm]);


    return (
        <>
        </>
    );
}