import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FileText, Search, UploadCloud } from 'lucide-react';

const CatalogFunctionality = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-16 p-8 my-24">
      {/* Headline */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Catalog Functionality</h1>
        {/* <h1 className="text-4xl font-bold">Explore Our Digital Catalog</h1> */}
        <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
          Search, and browse our extensive collection of educational PDFs, ePUB files, and resources.
        </p>
      </div>

      {/* Search and Upload */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        {/* Search Bar */}
        <div className="flex w-full max-w-md gap-2">
          <Input
            type="text"
            placeholder="Search catalog..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none"
          />
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90">
            <Search className="h-5 w-5" />
          </button>
        </div>

        {/* Upload Button */}
        {/* <button className="flex items-center gap-2 bg-muted border border-gray-300 px-4 py-2 rounded-lg hover:bg-muted/80">
          <UploadCloud className="h-5 w-5 text-indigo-600" />
          Upload PDF/ePUB
        </button> */}
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item} className="rounded-2xl shadow transition hover:shadow-lg p-0">
            <CardContent className="flex flex-col justify-between h-full space-y-4 p-6">
              <div className="space-y-4">
                <FileText className="h-10 w-10 text-yellow-600" />
                <h2 className="text-lg font-semibold">Resource Title {item}</h2>
                <p className="text-muted-foreground">
                  A brief description of this educational PDF or ePUB resource for quick browsing.
                </p>
              </div>
              <div className="bg-muted aspect-video w-full rounded-xl" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CatalogFunctionality;
