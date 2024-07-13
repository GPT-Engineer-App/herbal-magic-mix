import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Simulated search results
    setSearchResults([
      { name: "Chamomile Tea", description: "Calming and relaxing" },
      { name: "Ginger Root", description: "Aids digestion and reduces nausea" },
      { name: "Echinacea", description: "Boosts immune system" },
    ]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-900 to-blue-900 text-white">
      <header className="p-4 bg-green-800 bg-opacity-80">
        <h1 className="text-2xl font-bold text-center mb-4">Hierberito Moderno</h1>
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            type="text"
            placeholder="Search for a remedy..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow bg-green-700 text-white placeholder-green-300 border-green-600"
          />
          <Button type="submit" className="bg-green-600 hover:bg-green-700">Search</Button>
        </form>
      </header>

      <main className="flex-grow p-4">
        {searchResults.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Suggested Remedies</h2>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {searchResults.map((result, index) => (
                <Card key={index} className="bg-green-800 bg-opacity-50">
                  <CardContent className="p-4">
                    <h3 className="font-bold">{result.name}</h3>
                    <p>{result.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-xl font-semibold mb-4">Plant Categories</h2>
          <Tabs defaultValue="roots" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-green-800 bg-opacity-50">
              <TabsTrigger value="roots">Roots</TabsTrigger>
              <TabsTrigger value="powders">Powders</TabsTrigger>
              <TabsTrigger value="flowers">Flowers</TabsTrigger>
              <TabsTrigger value="leaves">Leaves</TabsTrigger>
              <TabsTrigger value="mushrooms">Mushrooms</TabsTrigger>
            </TabsList>
            <TabsContent value="roots" className="mt-4">
              <PlantCategoryContent category="Roots" />
            </TabsContent>
            <TabsContent value="powders" className="mt-4">
              <PlantCategoryContent category="Powders" />
            </TabsContent>
            <TabsContent value="flowers" className="mt-4">
              <PlantCategoryContent category="Flowers" />
            </TabsContent>
            <TabsContent value="leaves" className="mt-4">
              <PlantCategoryContent category="Leaves" />
            </TabsContent>
            <TabsContent value="mushrooms" className="mt-4">
              <PlantCategoryContent category="Mushrooms" />
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  );
};

const PlantCategoryContent = ({ category }) => {
  // Simulated plant data
  const plants = [
    { name: "Plant 1", description: "Description 1" },
    { name: "Plant 2", description: "Description 2" },
    { name: "Plant 3", description: "Description 3" },
  ];

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {plants.map((plant, index) => (
        <Card key={index} className="bg-green-800 bg-opacity-50">
          <CardContent className="p-4">
            <h3 className="font-bold">{plant.name}</h3>
            <p>{plant.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Index;