import Link from 'next/link';

export default function StudentInfo() {
    return (
        <div className = "p-2 m-4 bg-sky-700 rounded-md">
            <p>Name: Savanna Piscitelli</p>
            <p>Course Section: CPRG 306 F</p> 
            <Link href="https://github.com/savannapisc/cprg306-assignments">GitHub Repository: https://github.com/savannapisc/cprg306-assignments</Link>
        </div>

    );
}
