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

// Static product data from various retailers
const TRAVEL_TOILETRIES: Product[] = [
  {
    id: 1,
    name: "Malibu Travel 3 Pack - Lotion SPF30 100ml, Lotion SPF50 100ml & Aftersun Lotion 100ml",
    brand: "Malibu",
    description: "Travel-sized sun protection pack with SPF30, SPF50 lotions and aftersun lotion",
    imageUrl: "https://bunny-wp-pullzone-azlbpjuk8d.b-cdn.net/wp-content/uploads/2025/05/69274-Malibu-Travel-3-Pack-Lotion-SPF30-100ml-Lotion-SPF50-100ml-Aftersun-Lotion-100ml-300x300.png",
    category: "Travel Size Toiletries",
    sku: "69274",
    inStock: true
  },
  {
    id: 2,
    name: "Aussie Conditioner Miracle Moist Travel 100ml",
    brand: "Aussie",
    description: "Travel-sized miracle moist conditioner for dry hair",
    imageUrl: "https://bunny-wp-pullzone-azlbpjuk8d.b-cdn.net/wp-content/uploads/2025/05/Aussie-Conditioner-Miracle-Moist-Travel-100ml-69232B-300x300.jpg",
    category: "Travel Size Toiletries",
    sku: "69232B",
    inStock: true
  },
  {
    id: 3,
    name: "Aussie Shampoo Miracle Moist Travel 100ml",
    brand: "Aussie",
    description: "Travel-sized miracle moist shampoo for dry hair",
    imageUrl: "https://bunny-wp-pullzone-azlbpjuk8d.b-cdn.net/wp-content/uploads/2025/05/Aussie-Shampoo-Miracle-Moist-Travel-100ml-69231A-300x300.jpg",
    category: "Travel Size Toiletries",
    sku: "69231A",
    inStock: true
  },
  {
    id: 4,
    name: "Gillette Fusion Ultra Sensitive Shaving Gel 75ml",
    brand: "Gillette",
    description: "Ultra-sensitive shaving gel for a smooth, comfortable shave",
    imageUrl: "https://bunny-wp-pullzone-azlbpjuk8d.b-cdn.net/wp-content/uploads/2023/08/products-63549d-300x300.png",
    category: "Travel Size Toiletries",
    sku: "63549D",
    inStock: true
  },
  {
    id: 5,
    name: "Fluorodine Dental Travel Kit",
    brand: "Fluorodine",
    description: "Complete dental care travel kit with toothbrush and toothpaste",
    imageUrl: "https://bunny-wp-pullzone-azlbpjuk8d.b-cdn.net/wp-content/uploads/2023/08/products-63535m.jpg",
    category: "Travel Size Toiletries",
    sku: "63535M",
    inStock: true
  },
  {
    id: 6,
    name: "Sanex Deodorant Roll On Men Active 50ml",
    brand: "Sanex",
    description: "Active deodorant roll-on for men in travel size",
    imageUrl: "https://bunny-wp-pullzone-azlbpjuk8d.b-cdn.net/wp-content/uploads/2023/08/products-63363n.png",
    category: "Travel Size Toiletries",
    sku: "63363N",
    inStock: true
  },
  {
    id: 7,
    name: "Sanex Shower Gel Dermo Moist 50ml",
    brand: "Sanex",
    description: "Dermatologically tested moisturizing shower gel in travel size",
    imageUrl: "https://bunny-wp-pullzone-azlbpjuk8d.b-cdn.net/wp-content/uploads/2023/08/products-63302g-300x692.png",
    category: "Travel Size Toiletries",
    sku: "63302G",
    inStock: true
  },
  {
    id: 8,
    name: "Head & Shoulders Classic Clean Travel Shampoo 90ml",
    brand: "Head & Shoulders",
    description: "Anti-dandruff shampoo with zinc pyrithione for effective dandruff control in convenient travel size",
    imageUrl: "https://www.headandshoulders.com/sites/hs_ca_2/files/styles/product_image_large/public/touts/hns_cla_sha_tos_main.png",
    category: "Travel Size Toiletries",
    sku: "HS90",
    inStock: true
  },
  {
    id: 9,
    name: "Dove Original Beauty Bar Travel Size 25g",
    brand: "Dove",
    description: "¼ moisturizing cream beauty bar that cleanses and nourishes skin in travel-friendly size",
    imageUrl: "https://www.dove.com/content/dam/brands/dove/global/1072013/personal_wash/dove_original_beauty_bar_90g_tcm1305-461074_w768.png",
    category: "Travel Size Toiletries",
    sku: "DV25",
    inStock: true
  },
  {
    id: 10,
    name: "Nivea Protect & Care Deodorant Roll-On 25ml",
    brand: "Nivea",
    description: "48h protection deodorant with caring aloe vera extract in mini travel size",
    imageUrl: "https://www.nivea.co.uk/-/media/nivea/local/uk/deodorants/packshots/1000x1000_83717_front.png",
    category: "Travel Size Toiletries",
    sku: "NV25",
    inStock: true
  },
  {
    id: 11,
    name: "Colgate Total Toothpaste Travel Size 19ml",
    brand: "Colgate",
    description: "Advanced whitening toothpaste with 12-hour protection against bacteria in portable tube",
    imageUrl: "https://www.colgate.com/content/dam/cp-sites/oral-care/oral-care-center/global/products/toothpaste/total/colgate-total-advanced-whitening-toothpaste-75ml.png",
    category: "Travel Size Toiletries",
    sku: "CG19",
    inStock: true
  },
  {
    id: 12,
    name: "L'Oréal Elvive Total Repair 5 Shampoo 50ml",
    brand: "L'Oréal",
    description: "Reconstructing shampoo for damaged hair with ceramide and protein complex",
    imageUrl: "https://www.lorealparis.co.uk/-/media/project/loreal/brand-sites/oap/emea/uk/products/hair-care/elvive/total-repair/packshots/elvive_total_repair_5_shampoo_400ml_3600523573912_front.png",
    category: "Travel Size Toiletries",
    sku: "LO50",
    inStock: true
  },
  {
    id: 13,
    name: "Johnson's Baby Shampoo Travel Size 50ml",
    brand: "Johnson's",
    description: "No more tears formula gentle baby shampoo with mild cleansing ingredients",
    imageUrl: "https://www.johnsonsbaby.co.uk/sites/johnsonsbaby_uk_3/files/styles/product_image/public/touts/jjb_sha_not_500ml_front_0.png",
    category: "Travel Size Toiletries",
    sku: "JB50",
    inStock: true
  },
  {
    id: 14,
    name: "Pantene Pro-V Daily Moisture Renewal Conditioner 50ml",
    brand: "Pantene",
    description: "Nourishing conditioner with Pro-Vitamin B5 for soft, manageable hair",
    imageUrl: "https://pantene.com/sites/pantene_us_2/files/styles/product_image/public/touts/pantene_daily_moisture_renewal_conditioner_12oz.png",
    category: "Travel Size Toiletries",
    sku: "PT50",
    inStock: true
  },
  {
    id: 15,
    name: "Simple Kind to Skin Refreshing Facial Wash 50ml",
    brand: "Simple",
    description: "Soap-free facial cleanser with vitamin B5 and vitamin E for sensitive skin",
    imageUrl: "https://www.simple.co.uk/content/dam/brands/simple/united_kingdom/1072017/pack_shots/simple_refreshing_facial_wash_gel_150ml_front_3574661530726.png",
    category: "Travel Size Toiletries",
    sku: "SP50",
    inStock: true
  },
  {
    id: 16,
    name: "TRESemmé Keratin Smooth Shampoo 50ml",
    brand: "TRESemmé",
    description: "Professional quality shampoo with keratin and marula oil for smooth hair",
    imageUrl: "https://www.tresemme.com/content/dam/brands/tresemme/united_states/1072013/packshots/tresemme_keratin_smooth_shampoo_828ml_front.png",
    category: "Travel Size Toiletries",
    sku: "TR50",
    inStock: true
  },
  {
    id: 17,
    name: "Schwarzkopf Gliss Hair Repair Mask 20ml",
    brand: "Schwarzkopf",
    description: "Intensive hair treatment mask with liquid keratin for damaged hair repair",
    imageUrl: "https://www.schwarzkopf.com/content/dam/schwarzkopf/international/en/retail-brands/gliss/packshots/gliss_ultimate_repair_mask_300ml.png",
    category: "Travel Size Toiletries",
    sku: "SK20",
    inStock: true
  },
  {
    id: 18,
    name: "Vaseline Intensive Care Body Lotion 50ml",
    brand: "Vaseline",
    description: "Fast-absorbing body lotion with healing micro-droplets of Vaseline jelly",
    imageUrl: "https://www.vaseline.com/content/dam/brands/vaseline/united_states/1183145/packshots/vaseline_intensive_care_essential_healing_lotion_200ml_front.png",
    category: "Travel Size Toiletries",
    sku: "VS50",
    inStock: true
  },
  {
    id: 19,
    name: "Sure Maximum Protection Deodorant 25ml",
    brand: "Sure",
    description: "Maximum strength antiperspirant with MotionSense technology for 72h protection",
    imageUrl: "https://www.sure.co.uk/content/dam/brands/sure/united_kingdom/1072017/packshots/sure_women_invisible_dry_antiperspirant_deodorant_aerosol_150ml_front.png",
    category: "Travel Size Toiletries",
    sku: "SR25",
    inStock: true
  },
  {
    id: 20,
    name: "Neutrogena T/Gel Therapeutic Shampoo 25ml",
    brand: "Neutrogena",
    description: "Medicated shampoo with coal tar extract for scalp conditions like dandruff",
    imageUrl: "https://www.neutrogena.com/sites/neutrogena_us/files/styles/product_image/public/touts/neutrogena_t_gel_therapeutic_shampoo_473ml_front.png",
    category: "Travel Size Toiletries",
    sku: "NT25",
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