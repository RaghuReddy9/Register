import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Mock data as we don't have a database
const applicants = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.j@example.com",
    phone: "555-0101",
    interest: "Community Outreach",
    availability: "Weekends",
  },
  {
    id: 2,
    name: "Bob Williams",
    email: "bob.w@example.com",
    phone: "555-0102",
    interest: "Event Planning",
    availability: "Flexible",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie.b@example.com",
    phone: "555-0103",
    interest: "Administrative Support",
    availability: "Weekdays",
  },
  {
    id: 4,
    name: "Diana Miller",
    email: "diana.m@example.com",
    phone: "555-0104",
    interest: "Fundraising",
    availability: "Weekends",
  },
  {
    id: 5,
    name: "Ethan Davis",
    email: "ethan.d@example.com",
    phone: "555-0105",
    interest: "Community Outreach",
    availability: "Flexible",
  },
];

export default function AdminDashboard() {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Volunteer Applicants</CardTitle>
          <CardDescription>A list of individuals who have registered to volunteer.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Full Name</TableHead>
                  <TableHead className="hidden md:table-cell">Email</TableHead>
                  <TableHead className="hidden lg:table-cell">Phone</TableHead>
                  <TableHead>Area of Interest</TableHead>
                  <TableHead className="text-right">Availability</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applicants.map((applicant) => (
                  <TableRow key={applicant.id}>
                    <TableCell className="font-medium">{applicant.name}</TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">{applicant.email}</TableCell>
                    <TableCell className="hidden lg:table-cell text-muted-foreground">{applicant.phone}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{applicant.interest}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                       <Badge variant="outline">{applicant.availability}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
