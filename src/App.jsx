import {
    Hero,
    PopularProducts,
    SuperQuality,
    Services,
    SpecialOffer,
    CustomerReviews,
    Subscribe,
    Footer
} from './sections';
import Nav from './components/Nav';

const App = () => (
    <main className="relative">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
            <Hero />
        </section>

        <div className="padding">
            <PopularProducts />
        </div>
        <div className="padding">
            <SuperQuality />
        </div>
        <div className="padding-x py-10">
            <Services />
        </div>
        <div className="padding">
            <SpecialOffer />
        </div>
        <div className="padding bg-pale-blue ">
            <CustomerReviews />
        </div>
        <div className="padding-x sm:py-32 py-16 w-full">
            <Subscribe />
        </div>
        <div className="bg-black padding-x padding-t pb-8">
            <Footer />
        </div>
    </main>
)

export default App;