import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {Candidate} from "@/canstant/candidate.ts";

const ListCandidatePageComponent = () => {
    const [candidates, setCandidates] = useState<Candidate[]>([]);

    useEffect(() => {
        // Replace 'your-api-endpoint' with the actual API endpoint
        axios.get('http://localhost:8080/candidates')
            .then(response => {
                setCandidates(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the candidates!", error);
            });
    }, []);

    return (
        <Table>
            <TableCaption>A list of your recent Candidates.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Id</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className="text-right">Age</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {candidates.map((candidate) => (
                    <TableRow key={candidate.id}>
                        <TableCell className="font-medium">{candidate.id}</TableCell>
                        <TableCell>{candidate.name}</TableCell>
                        <TableCell>{candidate.email}</TableCell>
                        <TableHead className="text-right">{candidate.age}</TableHead>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">{candidates.length}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}

export default ListCandidatePageComponent;
