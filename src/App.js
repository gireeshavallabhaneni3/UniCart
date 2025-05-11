import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import  { useState } from 'react';
import { BrowserRouter as  Routes, Route } from 'react-router-dom';

import { Navbar } from './Navbar';
import { SignIn } from './SignIn';
import { Profile } from './Profile'; // The Profile page
import { Orders } from './Orders';  // The Orders page
import { AppliancesPage } from './AppliancesPage';
import { AudioPage } from './AudioPage';
import { Cards } from './Cards';
import { LaptopPage } from './LaptopPage';
import { MobilePage } from './MobilePage';
import { TvPage } from './TvPage';
import { AccessoriesPage } from './AccessoriesPage';
import { AutomobilePage } from './AutomobilePage';
import { BeautyPage } from './BeautyPage';
import { BooksPage } from './BooksPage';
import { DecorPage } from './DecorPage';
import { Description } from './Description';
import { FitnessPage } from './FitnessPage';
import { FurniturePage } from './FurniturePage';
import { GamingPage } from './GamingPage';
import { GroceriesPage } from './GroceriesPage';
import { KidawearFashionPage } from './KidawearFashionPage';
import { KitchenPage } from './KitchenPage';
import { Mapping } from './Mapping';
import { MenFashionPage } from './MenFashionPage';
import { PetPage } from './PetPage';
import { TravelPage } from './TravelPage';
import { WomenFashionPage } from './WomenFashionPage';
import { CartPage } from './CartPage';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} searchQuery= {searchQuery} setSearchQuery={setSearchQuery}/>

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Cards searchQuery={searchQuery}/>} />

        {/* Sign In Page */}
        <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />

        {/* Product Pages */}
        <Route path="/" element={<Cards searchQuery={searchQuery}/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/mobiles" element={<MobilePage  searchQuery={searchQuery} />} />
        <Route path="/laptops" element={<LaptopPage searchQuery={searchQuery} />} />
        <Route path="/appliances" element={<AppliancesPage searchQuery={searchQuery} />} />
        <Route path="/tv" element={<TvPage searchQuery={searchQuery} />} />
        <Route path="/audio" element={<AudioPage searchQuery={searchQuery} />} />
        <Route path="/menfashion" element={<MenFashionPage searchQuery={searchQuery} />} />
        <Route path="/womenfashion" element={<WomenFashionPage searchQuery={searchQuery}/>} />
        <Route path="/kidswearfashion" element={<KidawearFashionPage searchQuery={searchQuery}/>} />
        <Route path="/beauty" element={<BeautyPage searchQuery={searchQuery}/>} />
        <Route path="/kitchen" element={<KitchenPage searchQuery={searchQuery}/>} />
        <Route path="/fitness" element={<FitnessPage searchQuery={searchQuery}/>} />
        <Route path="/books" element={<BooksPage searchQuery={searchQuery}/>} />
        <Route path="/gaming" element={<GamingPage searchQuery={searchQuery}/>} />
        <Route path="/automobile" element={<AutomobilePage searchQuery={searchQuery}/>} />
        <Route path="/groceries" element={<GroceriesPage searchQuery={searchQuery}/>} />
        <Route path="/pet" element={<PetPage searchQuery={searchQuery}/>} />
        <Route path="/travel" element={<TravelPage searchQuery={searchQuery} />} />
        <Route path="/decor" element={<DecorPage searchQuery={searchQuery}/>} />
        <Route path="/furniture" element={<FurniturePage searchQuery={searchQuery} />} />
        <Route path="/accessories" element={<AccessoriesPage  searchQuery={searchQuery} />} />

        {/* Mapping / Description Routes */}
        <Route path="/mapping/description" element={<Mapping />} />
        <Route path="/mobiles/:phoneName/description" element={<Description />} />
        <Route path="/laptops/:laptopName/description" element={<Description />} />
        <Route path="/appliances/:appliancename/description" element={<Description />} />
        <Route path="/tv/:tvname/description" element={<Description />} />
        <Route path="/audio/:audioname/description" element={<Description />} />
        <Route path="/menfashion/:menfashionname/description" element={<Description />} />
        <Route path="/womenfashion/:womenfashionname/description" element={<Description />} />
        <Route path="/kidswearfashion/:kidswearfashionname/description" element={<Description />} />
        <Route path="/beauty/:beautyname/description" element={<Description />} />
        <Route path="/kitchen/:kitchenname/description" element={<Description />} />
        <Route path="/fitness/:fitnessname/description" element={<Description />} />
        <Route path="/books/:booksname/description" element={<Description />} />
        <Route path="/gaming/:gamingname/description" element={<Description />} />
        <Route path="/automobile/:automobilename/description" element={<Description />} />
        <Route path="/groceries/:groceriesname/description" element={<Description />} />
        <Route path="/pet/:petname/description" element={<Description />} />
        <Route path="/travel/:travelname/description" element={<Description />} />
        <Route path="/decor/:decorname/description" element={<Description />} />
        <Route path="/furniture/:furniturename/description" element={<Description />} />
        <Route path="/accessories/:accessoriesname/description" element={<Description />} />
        <Route path="/cart" element={<CartPage />}/>

        {/* 404 Not Found */}
      </Routes>
   </>
  );
};

export default App;
