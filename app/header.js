'use client';
import Typography from '@mui/material/Typography'
import BoltIcon from '@mui/icons-material/Bolt';
export default function Header() {
    return (
        <nav className="h-16 bg-header flex justify-center items-center text-white text-3xl">
            <div>
                <BoltIcon className="h-50 w-50"/>
            </div>
            <div>
                React Battle
            </div>
        </nav>
    )
}