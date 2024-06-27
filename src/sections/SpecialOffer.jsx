import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full" />

      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Take advantage of our special offer with exclusive discounts on premium products. Elevate your style and enjoy exceptional savings. Hurry, this limited-time offer is too good to miss!
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Step into our realm and experience unbeatable savings. Elevate your style and feel the difference with our exclusive offer. This is your chance to save big—don't let it slip away!
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" iconURL={arrowRight} />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
