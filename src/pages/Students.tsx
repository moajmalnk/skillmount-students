import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import StudentCard from "@/components/StudentCard";
import { Search, Filter, X } from "lucide-react";

const Students = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBatch, setSelectedBatch] = useState<string>("all");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  
  // Mock data - replace with API calls
  const batches = Array.from({ length: 12 }, (_, i) => `Batch ${12 - i} - ${2024 - Math.floor(i / 2)}`);
  const allSkills = ["React", "Node.js", "TypeScript", "Python", "Vue.js", "Angular", "MongoDB", "PostgreSQL", "AWS", "Docker"];
  
  const students = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Student ${i + 1}`,
    batch: batches[i % batches.length],
    domain: i % 3 === 0 ? "https://example.com" : undefined,
    github: i % 2 === 0 ? "https://github.com/student" : undefined,
    email: `student${i + 1}@example.com`,
    phone: i % 4 === 0 ? "+1234567890" : undefined,
    skills: allSkills.slice(0, Math.floor(Math.random() * 4) + 2),
    isTopPerformer: i < 8
  }));
  
  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };
  
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedBatch("all");
    setSelectedSkills([]);
  };
  
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBatch = selectedBatch === "all" || student.batch === selectedBatch;
    const matchesSkills = selectedSkills.length === 0 || 
      selectedSkills.some(skill => student.skills.includes(skill));
    
    return matchesSearch && matchesBatch && matchesSkills;
  });

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">Student Directory</h1>
          <p className="text-xl text-muted-foreground">
            Explore projects from 1,200+ talented developers across 12 batches
          </p>
        </div>
        
        {/* Filters */}
        <div className="bg-card rounded-lg shadow-card p-6 mb-8">
          <div className="grid md:grid-cols-12 gap-4 mb-6">
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="md:col-span-3">
              <Select value={selectedBatch} onValueChange={setSelectedBatch}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Batch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Batches</SelectItem>
                  {batches.map((batch) => (
                    <SelectItem key={batch} value={batch}>
                      {batch}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="md:col-span-4 flex items-center justify-end gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {filteredStudents.length} of {students.length} students
              </span>
              {(searchQuery || selectedBatch !== "all" || selectedSkills.length > 0) && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={clearFilters}
                  className="text-xs"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>
          </div>
          
          {/* Skills Filter */}
          <div>
            <div className="text-sm font-medium text-foreground mb-3">Filter by Skills:</div>
            <div className="flex flex-wrap gap-2">
              {allSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant={selectedSkills.includes(skill) ? "default" : "outline"}
                  className="cursor-pointer transition-all hover:scale-105"
                  onClick={() => toggleSkill(skill)}
                >
                  {skill}
                  {selectedSkills.includes(skill) && (
                    <X className="w-3 h-3 ml-1" />
                  )}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        {/* Student Grid */}
        {filteredStudents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStudents.map((student) => (
              <StudentCard key={student.id} {...student} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-4">No students found</p>
            <Button onClick={clearFilters} variant="outline">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Students;
