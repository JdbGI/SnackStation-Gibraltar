import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Package, Search, Filter } from "lucide-react";
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  imageUrl: string;
  category: string;
  inStock: boolean;
  sku: string;
};

// Static product data based on approved list
const TRAVEL_TOILETRIES: Product[] = [
  {
    id: 1,
    name: "Nivea Micellar Water Sensitive Skin 100ml",
    brand: "Nivea",
    description: "Gentle micellar water for sensitive skin, removes makeup and cleanses in one step",
    imageUrl: "https://images.unsplash.com/photo-1556229174-f6ac7c2610de?w=300&h=300&fit=crop&auto=format",
    category: "Travel Size Toiletries",
    sku: "NV001",
    inStock: true
  },
  {
    id: 2,
    name: "Colgate Plax Cool Mint Travel Mouthwash 100ml",
    brand: "Colgate",
    description: "Antibacterial mouthwash with cool mint flavor for fresh breath and plaque protection",
    imageUrl: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=300&h=300&fit=crop&auto=format",
    category: "Travel Size Toiletries",
    sku: "CG001",
    inStock: true
  },
  {
    id: 3,
    name: "Gillette Fusion Ultra Sensitive Shaving Gel 75ml",
    brand: "Gillette",
    description: "Ultra-sensitive shaving gel for a smooth, comfortable shave",
    imageUrl: "https://bunny-wp-pullzone-azlbpjuk8d.b-cdn.net/wp-content/uploads/2023/08/products-63549d-300x300.png",
    category: "Travel Size Toiletries",
    sku: "63549D",
    inStock: true
  },
  {
    id: 4,
    name: "Nivea Hand Cream Protective Care Beeswax 75ml",
    brand: "Nivea",
    description: "Protective hand cream with beeswax for dry and rough hands",
    imageUrl: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=300&fit=crop&auto=format",
    category: "Travel Size Toiletries",
    sku: "NV002",
    inStock: true
  },
  {
    id: 5,
    name: "Femfresh Wipes 15's",
    brand: "Femfresh",
    description: "Gentle intimate wipes for daily freshness and comfort",
    imageUrl: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop&auto=format",
    category: "Travel Size Toiletries",
    sku: "FF001",
    inStock: true
  },
  {
    id: 6,
    name: "Head & Shoulders Shampoo Classic 95ml",
    brand: "Head & Shoulders",
    description: "Anti-dandruff shampoo with zinc pyrithione for effective dandruff control",
    imageUrl: "https://images.unsplash.com/photo-1556229174-f6ac7c2610de?w=300&h=300&fit=crop&auto=format",
    category: "Travel Size Toiletries",
    sku: "HS001",
    inStock: true
  },
  {
    id: 7,
    name: "Pantene Shampoo Repair & Protect 90ml",
    brand: "Pantene",
    description: "Repair and protect shampoo with Pro-Vitamin B5 for damaged hair",
    imageUrl: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=300&h=300&fit=crop&auto=format",
    category: "Travel Size Toiletries",
    sku: "PT001",
    inStock: true
  },
  {
    id: 8,
    name: "Fluorodine Dental Travel Kit",
    brand: "Fluorodine",
    description: "Complete dental care travel kit with toothbrush and toothpaste",
    imageUrl: "https://bunny-wp-pullzone-azlbpjuk8d.b-cdn.net/wp-content/uploads/2023/08/products-63535m.jpg",
    category: "Travel Size Toiletries",
    sku: "63535M",
    inStock: true
  },
  {
    id: 9,
    name: "Sanex Deodorant Roll On Men Active 50ml",
    brand: "Sanex",
    description: "Active deodorant roll-on for men in travel size",
    imageUrl: "https://bunny-wp-pullzone-azlbpjuk8d.b-cdn.net/wp-content/uploads/2023/08/products-63363n.png",
    category: "Travel Size Toiletries",
    sku: "63363N",
    inStock: true
  },
  {
    id: 10,
    name: "Original Source Shower Gel Coconut 50ml",
    brand: "Original Source",
    description: "Natural coconut shower gel with moisturizing properties",
    imageUrl: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop&auto=format",
    category: "Travel Size Toiletries",
    sku: "OS001",
    inStock: true
  },
  {
    id: 11,
    name: "Sanex Shower Gel Dermo Moist 50ml",
    brand: "Sanex",
    description: "Dermatologically tested moisturizing shower gel in travel size",
    imageUrl: "https://bunny-wp-pullzone-azlbpjuk8d.b-cdn.net/wp-content/uploads/2023/08/products-63302g-300x692.png",
    category: "Travel Size Toiletries",
    sku: "63302G",
    inStock: true
  },
  {
    id: 12,
    name: "Simple Refreshing Face Wash Gel 50ml",
    brand: "Simple",
    description: "Gentle face wash gel with vitamin B5 and vitamin E for all skin types",
    imageUrl: "https://images.unsplash.com/photo-1556229010-aa4e0b57b4c9?w=300&h=300&fit=crop&auto=format",
    category: "Travel Size Toiletries",
    sku: "SP001",
    inStock: true
  }
];

export default function Catalogue() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");

  const products = TRAVEL_TOILETRIES;

  // Filter products based on search and filters
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesBrand = selectedBrand === "all" || product.brand === selectedBrand;

    return matchesSearch && matchesBrand && product.inStock;
  });

  // Get unique brands for filter
  const brands = Array.from(new Set(products.map(p => p.brand))).sort();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <Package className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Product Catalogue</h1>
              <p className="text-gray-600 mt-1">Travel Size Toiletries from Harrison's Direct</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Filter Products</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Brand Filter */}
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="aspect-square relative overflow-hidden rounded-t-lg bg-gray-100">
          {product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='14' fill='%236b7280' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Package className="h-12 w-12 text-gray-400" />
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex items-start justify-between mb-2">
            <Badge variant="secondary" className="text-xs">
              {product.brand}
            </Badge>
            {product.sku && (
              <span className="text-xs text-gray-500">SKU: {product.sku}</span>
            )}
          </div>
          
          <CardTitle className="text-sm font-medium leading-tight mb-2 line-clamp-2">
            {product.name}
          </CardTitle>
          
          {product.description && (
            <p className="text-xs text-gray-600 mb-3 line-clamp-2">
              {product.description}
            </p>
          )}
        </div>
        

      </CardContent>
    </Card>
  );
}