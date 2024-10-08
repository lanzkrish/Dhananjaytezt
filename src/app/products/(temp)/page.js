"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Products() {

  const products = [
    {
      id: 0,
      name: 'SAMSUNG Galaxy S23 FE (Mint, 128 GB)',
      price: 33999,
      rating: 4.3,
      specification: [
        '8 GB RAM | 128 GB ROM',
        '16.26 cm (6.4 inch) Full HD+ Display',
        '50MP + 12MP | 10MP Front Camera',
        '4500 mAh Battery',
        'Samsung Exynos 2200 Processor'

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/z/q/0/-original-imahyhm6uug8hf2r.jpeg?q=70&crop=false',
      brand: 'samsung',
      os: 'android',
      category: 'mobile',
      imgSrcs: [
        'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/z/q/0/-original-imahyhm6uug8hf2r.jpeg?q=70&crop=false',
        'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/r/v/d/-original-imahyhm6tuhxqhfu.jpeg?q=70&crop=false',
        'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/8/3/x/-original-imagzm8pagefz9z4.jpeg?q=70&crop=false',
        'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/5/k/u/-original-imahyhm6qbjxrnuk.jpeg?q=70&crop=false',
        'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/g/s/z/-original-imahyhm6xghgyzaf.jpeg?q=70&crop=false',
        'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/8/j/k/-original-imahyhm6pmzgzxg8.jpeg?q=70&crop=false'
      ]
    },
    {
      id: 1,
      name: 'Apple iPhone 12 (Blue, 64 GB)',
      price: 37999,
      rating: 4.6,
      specification: [
        '64 GB ROM',
        '15.49 cm (6.1 inch) Super Retina XDR Display',
        '12MP + 12MP | 12MP Front Camera',
        'A14 Bionic Chip with Next Generation Neural Engine Processor',
        'Ceramic Shield',
        'All Screen OLED Display',
        '12MP TrueDepth Front Camera with Night Mode, 4K Dolby Vision HDR Recording'

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70',
      brand: 'apple',
      os: 'ios',
      category: 'mobile'

    },
    {
      id: 2,
      name: 'Apple iPhone 14 Plus (Blue, 128 GB)',
      price: 58999,
      rating: 4.6,
      specification: [
        '128 GB ROM',
        '17.02 cm (6.7 inch) Super Retina XDR Display',
        '12MP + 12MP | 12MP Front Camera',
        'A15 Bionic Chip, 6 Core Processor Processor'

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/4/d/-original-imaghx9qygjjg8hz.jpeg?q=70',
      brand: 'apple',
      os: 'ios',
      category: 'mobile'

    },
    {
      id: 3,
      name: 'Apple iPhone 13 (Green, 128 GB)',
      price: 50499,
      rating: 4.6,
      specification: [
        '128 GB ROM',
        '15.49 cm (6.1 inch) Super Retina XDR Display',
        '12MP + 12MP | 12MP Front Camera',
        'A15 Bionic Chip Processor'

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/312/312/l0igvww0/mobile/r/q/m/-original-imagca5ajerqpfjy.jpeg?q=70',
      brand: 'apple',
      os: 'ios',
      category: 'mobile'

    },
    {
      id: 4,
      name: 'Apple iPhone 14 Plus (Midnight, 128 GB)',
      price: 58999,
      rating: 4.6,
      specification: [
        '128 GB ROM',
        '17.02 cm (6.7 inch) Super Retina XDR Display',
        '12MP + 12MP | 12MP Front Camera',
        'A15 Bionic Chip, 6 Core Processor Processor'

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/b/0/-original-imaghx9qnhzxegu2.jpeg?q=70',
      brand: 'apple',
      os: 'ios',
      category: 'mobile'

    },
    {
      id: 5,
      name: 'Apple iPhone 15 (Blue, 128 GB)',
      price: 70249,
      rating: 4.6,
      specification: [
        '128 GB ROM',
        '15.49 cm (6.1 inch) Super Retina XDR Display',
        '48MP + 12MP | 12MP Front Camera',
        'A16 Bionic Chip, 6 Core Processor Processor'

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70',
      brand: 'apple',
      os: 'ios',
      category: 'mobile'

    },
    {
      id: 6,
      name: 'Apple iPhone 15 Pro (Blue Titanium, 512 GB)',
      price: 149990,
      rating: 4.6,
      specification: [
        '512 GB ROM',
        '15.49 cm (6.1 inch) Super Retina XDR Display',
        '48MP + 12MP + 12MP | 12MP Front Camera',
        'A17 Pro Chip, 6 Core Processor Processor'

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/4/r/-original-imagtc4g22rcatjg.jpeg?q=70',
      brand: 'apple',
      os: 'ios',
      category: 'mobile'

    },
    {
      id: 7,
      name: 'Apple iPhone 15 Pro Max (Natural Titanium, 256 GB)',
      price: 139990,
      rating: 4.6,
      specification: [
        '256 GB ROM',
        '17.02 cm (6.7 inch) Super Retina XDR Display',
        '48MP + 12MP + 12MP | 12MP Front Camera',
        'A17 Pro Chip, 6 Core Processor Processor'

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/q/i/-original-imagtc3kfyhgfcvr.jpeg?q=70',
      brand: 'apple',
      os: 'ios',
      category: 'mobile'

    },
    {
      id: 8,
      name: 'SAMSUNG Galaxy S23 FE (Mint, 128 GB)',
      price: 33999,
      rating: 4.3,
      specification: [
        '8 GB RAM | 128 GB ROM',
        '16.26 cm (6.4 inch) Full HD+ Display',
        '50MP + 12MP | 10MP Front Camera',
        '4500 mAh Battery',
        'Samsung Exynos 2200 Processor'

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/z/q/0/-original-imahyhm6uug8hf2r.jpeg?q=70&crop=false',
      brand: 'samsung',
      os: 'android',
      category: 'mobile',
      imgSrcs: [
        'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/z/q/0/-original-imahyhm6uug8hf2r.jpeg?q=70&crop=false',
        'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/r/v/d/-original-imahyhm6tuhxqhfu.jpeg?q=70&crop=false',
        'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/8/3/x/-original-imagzm8pagefz9z4.jpeg?q=70&crop=false',
        'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/5/k/u/-original-imahyhm6qbjxrnuk.jpeg?q=70&crop=false',
        'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/g/s/z/-original-imahyhm6xghgyzaf.jpeg?q=70&crop=false',
        'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/8/j/k/-original-imahyhm6pmzgzxg8.jpeg?q=70&crop=false'
      ]

    },
    {
      id: 9,
      name: 'SAMSUNG Galaxy S23 5G (Phantom Black, 128 GB)',
      price: 44999,
      rating: 4.5,
      specification: [
        '8 GB RAM | 128 GB ROM',
        '15.49 cm (6.1 inch) Full HD+ Display',
        '50MP + 10MP + 12MP | 12MP Front Camera',
        '3900 mAh Lithium Ion Battery',
        'Qualcomm Snapdragon 8 Gen 2 Processor',
        ''

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/i/d/-original-imagzm8qbwwyyvhf.jpeg?q=70',
      brand: 'samsung',
      os: 'android',
      category: 'mobile'

    },
    {
      id: 10,
      name: 'SAMSUNG Galaxy S24 5G (Cobalt Violet, 256 GB)',
      price: 67999,
      rating: 4.4,
      specification: [
        '8 GB RAM | 256 GB ROM',
        '15.75 cm (6.2 inch) Full HD+ Display',
        '50MP + 10MP + 12MP | 12MP Front Camera',
        '4000 mAh Battery',
        'Exynos 2400 Processor'

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/b/9/-original-imahyvnuaasgsgvh.jpeg?q=70',
      brand: 'samsung',
      os: 'android',
      category: 'mobile'

    },
    {
      id: 11,
      name: 'SAMSUNG Galaxy S24 Ultra 5G (Titanium Black, 256 GB)',
      price: 129999,
      rating: 4.6,
      specification: [
        '12 GB RAM | 256 GB ROM',
        '17.27 cm (6.8 inch) Quad HD+ Display',
        '200MP + 50MP + 12MP + 10MP | 12MP Front Camera',
        '5000 mAh Battery',
        'Snapdragon 8 Gen 3 Processor'

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/e/8/-original-imahyvntxfrpuw6g.jpeg?q=70',
      brand: 'samsung',
      os: 'android',
      category: 'mobile'

    },
    {
      id: 12,
      name: 'Apple MacBook Air Apple M3 - (8 GB/256 GB SSD/macOS Sonoma) MRXT3HN/A',
      price: 104990,
      rating: 4.6,
      specification: [
        'Apple M3 Processor',
        '8 GB Unified Memory RAM',
        'Mac OS Operating System',
        '256 GB SSD',
        '33.02 cm (13 Inch) Display',
        'Built-in Apps: App Store, Books, Calendar, Contacts, FaceTime, Find My, Freeform, GarageBand, Home, iMovie, Keynote, Mail, Maps, Messages, Music, Notes, Numbers, Pages, Photo Booth, Photos, Podcasts, Preview, QuickTime Player, Reminders, Safari, Shortcuts, Siri, Stocks, Time Machine, TV, Voice Memos'

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/a/q/h/-original-imagypv6prbgkfzg.jpeg?q=70',
      brand: 'apple',
      os: 'mac',
      category: 'laptop'

    },
    {
      id: 13,
      name: 'Apple 2023 MacBook Pro Apple M3 Pro - (18 GB/512 GB SSD/macOS Sonoma) MRX63HN/A',
      price: 187990,
      rating: 4.6,
      specification: [
        'Apple M3 Pro Processor',
        '18 GB Unified Memory RAM',
        'Mac OS Operating System',
        '512 GB SSD',
        '35.56 cm (14 Inch) Display',
        'Built-in Apps- App Store, Books, Calendar, Contacts, FaceTime, Find My, Freeform, GarageBand, Home, iMovie, Keynote, Mail, Maps, Messages, Music, Notes, Numbers, Pages, Photo Booth, Photos, Podcasts, Preview, QuickTime Player, Reminders, Safari, Shortcuts, Siri, Stocks, Time Machine, TV, Voice Memos'

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/u/v/n/-original-imaguw3hhw9ce9ry.jpeg?q=70',
      brand: 'apple',
      os: 'mac',
      category: 'laptop'

    },
    {
      id: 14,
      name: 'ASUS Vivobook Pro 15 For Creator, AMD Ryzen 5 Hexa Core 5600HS - (16 GB/1 TB SSD/Windows 11 Home/4 GB ...',
      price: 65990,
      rating: 4.5,
      specification: [
        'AMD Ryzen 5 Hexa Core Processor',
        '16 GB DDR4 RAM',
        'Windows 11 Operating System',
        '1 TB SSD',
        '39.62 cm (15.6 Inch) Display',
        ''

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/d/k/k/-original-imagqkqnb2fpbhyb.jpeg?q=70',
      brand: 'asus',
      os: 'windows',
      category: 'laptop'

    },
    {
      id: 15,
      name: 'HP Omen Intel Core i7 13th Gen 13700HX - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForc...',
      price: 104990,
      rating: 4.2,
      specification: [
        'Intel Core i7 Processor (13th Gen)',
        '16 GB DDR5 RAM',
        'Windows 11 Operating System',
        '512 GB SSD',
        '40.89 cm (16.1 Inch) Display'

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/b/x/16-wf0179tx-gaming-laptop-hp-original-imahyjjmfqnswgec.jpeg?q=70',
      brand: 'hp',
      os: 'windows',
      category: 'laptop'

    },
    {
      id: 16,
      name: 'SAMSUNG 138 cm (55 inch) QLED Ultra HD (4K) Smart Tizen TV',
      price: 58990,
      rating: 4.4,
      specification: [
        'Operating System: Tizen',
        'Ultra HD (4K) 3840 x 2160 Pixels',
        'Launch Year: 2023'

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/television/z/z/s/-original-imagttjpr7vphrks.jpeg?q=70',
      brand: 'samsung',
      os: 'Tizen',
      category: 'tv'

    },
    {
      id: 17,
      name: 'SONY Bravia 2 138.8 cm (55 inch) Ultra HD (4K) LED Smart Google TV 2024 Edition',
      price: 70999,
      rating: 4.4,
      specification: [
        'Operating System: Google TV',
        'Ultra HD (4K) 3840 x 2160 Pixels',
        'Launch Year: 2024'

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/television/0/9/c/-original-imah2myzmrrc9kx5.jpeg?q=70',
      brand: 'sony',
      os: 'google TV',
      category: 'tv'

    },
    {
      id: 18,
      name: 'SAMSUNG Neo QLED 189 cm (75 inch) QLED Ultra HD (8K) Smart Tizen TV',
      price: 650599,
      rating: 4.6,
      specification: [
        'Operating System: Tizen',
        'Ultra HD (8K) 7680 x 4320 Pixels',
        'Launch Year: 2023',

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/television/z/y/z/qa75qn800ckxxl-samsung-original-imagzvtwzuzmxmyh.jpeg?q=70',
      brand: 'samsung',
      os: 'Tizen',
      category: 'tv'

    },
    {
      id: 19,
      name: 'IFB 10 kg Fully Automatic Top Load Washing Machine with In-built Heater Black',
      price: 33999,
      rating: 4.9,
      specification: [
        '720 RPM Max Speed',
        '5 Star Rating',
        'With In-Built Heater'

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/g/l/u/-original-imagy7ayer66fuug.jpeg?q=70',
      brand: 'IFB',
      category: 'mowashing machine'

    },
    {
      id: 20,
      name: 'SAMSUNG 8 kg 5 star, Ecobubble, Digital Inverter, Fully Automatic Top Load Washing Machine Grey',
      price: 19999,
      rating: 4.3,
      specification: [
        '700 rpm Max Speed',
        '5 Star Rating'

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/c/a/b/-original-imahfs4fhngph7ak.jpeg?q=70',
      brand: 'samsung',
      category: 'washing machine'

    },
    {
      id: 21,
      name: 'Canon EOS 7D Mark II DSLR Camera Body Only',
      price: 99990,
      rating: 4.1,
      specification: [
        'Effective Pixels: 20.2 MP',
        'Sensor Type: CMOS',
        'WiFi Available',
        '5472 x 3648',

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/312/312/jk8lz0w0/dslr-camera/h/k/h/eos-7d-mark-ii-canon-original-imaf6n7gkmgdf4tx.jpeg?q=70',
      brand: 'canon',
      category: 'dslr'

    },
    {
      id: 22,
      name: 'SONY Alpha ILCE-7M4K Full Frame Mirrorless Camera with 28-70 mm Zoom LensFeaturing Eye AF and 4K movie...',
      price: 222490,
      rating: 4.3,
      specification: [
        'Effective Pixels: 33 MP',
        'Sensor Type: CMOS',
        'WiFi Available',
        '4K',
        '7K oversampling for beautifully expressive, richly detailed images (When recording 4K movies at up to 30p, full-frame 7K oversampling is possible, resulting in high-resolution, highly detailed 4K. ',
        'Select the mode that best suits your purpose, and let the camera deliver.), 4K 60p, 10-bit 4:2:2 recording capability, Flagship-quality still and movie imaging, Flagship-quality still and movie imaging, Still photography without compromise, Higher resolution, better colour reproduction, Quickly set the visual mood with ten Creative Look presets, Reliable autofocus, impressive speed, Fast Hybrid AF, evolved, continuous shooting with fast buffer release, Improved Real-time Eye AF (Keeping the targeted eye in focus so you can concentrate on composition), High-performance ',
        'Active Mode: image stabilisation, Improvements in selection and editing workflow, Instantly turn your a7 IV into a web camera, Share your still images and movies immediately, Intuitive touch operations',

      ],
      imgSrc: 'https://rukminim2.flixcart.com/image/312/312/l08gsy80/dslr-camera/l/9/3/-original-imagc2czygwsfwkr.jpeg?q=70',
      brand: 'sony',
      category: 'dslr'

    },

  ];
  const [filteredProduct , setFilteredProducts] =useState(products);

const onChangeSearch = (searchString)=>{
  console.log(searchString);
  const temp = products.filter(product => product.name.toLowerCase().includes(searchString));
  setFilteredProducts(temp);
}

  return (

    <div className="bg-white">
      {/* <div className="container">
          <div className="columns-1 border">
          </div>
      </div> */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" >
      </div>
    </div> */}
        <div className="mx-auto max-w-2xl    text-wrap">
          <div>
            <div className="mb-2">
              <input id="search" name="search" type="text" placeholder="Search products..." onChange={(event)=> onChangeSearch(event.target.value)} className="shadow block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:py-1.5 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-4 lg:py-5 text-wrap">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Data to enrich your online business</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
        </div>
      </div> */}
          <div className="container border bg-white p-2 text-black">
            {filteredProduct.map((product, index) => (
              <div className="columns-3  flex py-2 border-b-2" key={product.id}>
                <div className="w-3/12 me-3">
                  <img src={product.imgSrc} />
                </div>
                <div className="w-6/12">
                  <h1 className=" text-xl"><Link href={`/products/product-details/${product.id}`}>{product.name}</Link></h1>
                  <ul className="text-sm text-start ms-7 mt-4 list-disc">
                    {product.specification.map((spec, j) => (
                      <li key={j}>{spec}</li>
                    ))}
                  </ul>
                </div>
                <div className="w-3/12 border-s-2 ps-2">
                  <p>{product.price}</p>
                  <button className="bg-yellow-300 p-1 px-2 mt-1 rounded-lg" >Add to cart</button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" ></div>
    </div> */}
      </div>
    </div>



  );
}
