import React, { useState, useRef } from 'react'
import AnimateScale from '../components/AnimateScale'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import AnimateRight from '../components/AnimateRight';
import AnimateLeft from '../components/AnimateLeft';
import { motion } from 'framer-motion';

const Ecosystem = () => {

    const [current, setCurrent] = useState(0)
    const sliderRef = useRef(null)

    const handleAfterChange = (index) => {
        setCurrent(index);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: handleAfterChange, // use the afterChange event,
        arrows: false
    };



    const zombieList = [

        <p className="">
            <span className='font-bold'>
                Baby Zombie:
            </span> During a camping trip in the forest, young Peter was bitten on the leg by a zombie, giving him the ability of a zombie. Anytime at night, he can turn into a zombie mummy.
        </p>
        ,
        <p className="">
            <span className="font-bold">Butcher Zombie: </span>Mudads was the chef of Paraon Hermes, before Hermes' death King Hermes also embalmed Mudads with him to serve Hermes in eternity. Mudads' cooking talent is unquestionable, he is a great cook.
        </p>
        ,
        <p className="">
            <span className="font-bold">Clown Zombie: </span> Pennywise when he was alive specialized in dressing up as a ghostly clown and kidnapping and killing children. When he died he was cursed and forever in the body of a clown.
        </p>
        ,
        <p className="">
            <span className="font-bold">Police Zombie: </span>Halon is a Police, a captain in the war between humans and zombies. Unfortunately, during a battle to protect the city of Atlanta, he was killed by a zombie and became a zombie.
        </p>
        ,
        <p className="">
            <span className="font-bold">Pirate Zombie: </span>John Eagles is a leader of a group of pirates, captain of the Red Coral boat. Throughout his life he and his sailors fought against evil, robbing the rich and giving to the poor. In a battle with the Island wizards, his ship was cursed, the Red Coral, the sailors and John Eagles became ghost ships and zombies.

        </p>
        ,


    ]

    const demonNames = [
        "Bael",
        "Agares",
        "Vassago",
        "Samigina",
        "Marbas",
        "Valefar",
        "Aamon",
        "Barbatos",
        "Paimon",
        "Buer",
        "Gusion",
        "Sitri",
        "Beleth",
        "Leraje",
        "Eligos",
        "Zepar",
        "Botis",
        "Bathin",
        "Sallos",
        "Purson",
        "Marax",
        "Ipos",
        "Naberius",
        "Glasya-Labolas",
        "Bifrons",
        "Vual",
        "Ronove",
        "Berith",
        "Astaroth",
        "Forneus",
        "Foras",
        "Asmodeus",
        "Gaap",
        "Furfur",
        "Orobas",
        "Gremory",
        "Vapula",
        "Flauros",
        "Amdusias",
        "Belial",
        "Decarabia",
        "Seere",
        "Dantalion",
        "Andras",
        "Kimaris",
        "Aamon",
        "Alocer",
        "Alloces",
        "Amdusias",
        "Andras",
        "Andrealphus",
        "Asmodeus",
        "Astaroth",
        "Bael",
        "Balam",
        "Barbatos",
        "Bathin",
        "Beleth",
        "Belial",
        "Bifrons",
        "Botis",
        "Buer",
        "Caim",
        "Crocell",
        "Dantalion",
        "Decarabia",
        "Flauros",
        "Foras",
        "Forneus",
        "Gusion",
        "Ipos",
        "Kimaris"
    ];

    return (
        <div className="w-full h-auto bg-newbg text-white py-20 px-10 overflow-hidden font-poppins" id="ecosystem">

            <AnimateScale>
                <div className="relative flex items-center w-fit mx-auto">
                    <img src="/hands.webp" alt="hands" className="absolute -left-28 sm:block hidden" />
                    <h1 className='md:text-8xl text-6xl font-zombie glow text-center'>ECOSYSTEM</h1>
                </div>
            </AnimateScale>

            <div className="max-w-[1500px] w-full mx-auto mt-[12rem] ">

                <div className="w-full flex items-center justify-center gap-x-[7rem] gap-y-20 lg:flex-row flex-col-reverse">
                    <div className="relative w-[20rem] h-[20rem] flex items-center justify-center">
                        <img src="/grave.webp" alt="grave" className="w-[13rem] scale-x-[-1] absolute -left-10 bottom-0 m-auto" />

                        <div className="max-w-[16rem] w-[16rem]">
                            <Slider {...settings} ref={sliderRef}>
                                {zombieList.map((items, i) => {
                                    return (
                                        <img src={`/ecozombies/${i + 1}.webp`} alt="zombie" className="z-10 w-[15rem]" key={i} />
                                    )
                                })}

                            </Slider>
                        </div>

                        <div className="absolute lg:-left-16 left-0 right-0 -bottom-7 mx-auto w-[7rem] h-10 translate-y-full flex items-center justify-between text-white text-4xl">
                            <FaLongArrowAltLeft className='cursor-pointer' onClick={() => sliderRef?.current?.slickPrev()} />
                            <FaLongArrowAltRight className='cursor-pointer' onClick={() => sliderRef?.current?.slickNext()} />
                        </div>
                    </div>


                    <div className="max-w-[35rem] lg:text-left text-center">
                        <AnimateRight>
                            <h2 className='font-zombie text-5xl'>Game Zombie</h2>
                            <p className="font-poppins mt-4">
                                The game Zombie is a collection of NFT zombies with unique features and abilities. Each zombie has its own backstory, which makes them interesting and collectible. There are five types of NFT zombies available in the game:
                            </p>

                            <div className="mt-7">
                                {zombieList[current]}
                            </div>
                        </AnimateRight>

                        <AnimateRight>
                            <div className="font-poppins mt-7">
                                <h2 className='font-poppins font-bold'>How to play?</h2>

                                <p className="">
                                    To play the game, users need to purchase NFT zombies from the Suizombie platform. Once they own an NFT zombie, they can raise it and earn profits. The profit mechanism is based on the rarity of the zombie and its level. The higher the rarity and level, the more profits it can generate.
                                </p>

                                <p className="">
                                    For example, a level one Baby Zombie with common rarity can generate one SZB token per day, while a level five Pirate Zombie with legendary rarity can generate 50 SBZ tokens per day. Users can sell their NFT zombies on the Suizombie platform, or trade them on other NFT marketplaces.
                                </p>

                            </div>
                        </AnimateRight>
                    </div>
                </div>

                <div className=" lg:text-right text-center mt-28 gap-x-[7rem] flex flex-col lg:flex-row gap-y-20 items-center justify-center">

                    <div className="w-full">
                        <AnimateLeft>

                            <h2 className='font-zombie text-5xl'>Zombie Lottery</h2>
                            <p className="font-poppins mt-4">
                                The gameplay of Zombie Lottery is simple and easy to understand. To participate, users need to mint NFT Zombie tokens on the SUI chain using the ZBS token. Each NFT token represents one of the 72 demons of King Solomon and has a unique name and attributes. The names of the 72 demons of King Solomon, represented as NFT Zombie tokens, are as follows:
                            </p>
                        </AnimateLeft>

                        <AnimateLeft>


                            <div className="w-full  gap-x-10 grid grid-cols-3 h-[15rem] overflow-y-scroll px-4 mt-4">
                                {demonNames.map((items, i) => {
                                    return (
                                        <p className="" key={i}>{i + 1}.&#41; {items}</p>
                                    )
                                })}
                            </div>

                            <div className="flex flex-col gap-y-4 mt-7">
                                <p className="">
                                    Once the user has minted the NFT Zombie token, they can stake it in the lottery pool. The staked NFT tokens are added to the pool, and their value is used to determine the size of the weekly prize pool.
                                </p>

                                <p className="">
                                    Each week, a random NFT Zombie token is selected as the winning token. The owner of the staked NFT token that matches the winning token will win a share of the prize pool. The prize pool is distributed among the winners in proportion to the number of tokens they have staked in the pool.
                                </p>

                            </div>

                        </AnimateLeft>

                        <AnimateLeft>
                            <div className="mt-7">
                                <h2 className='font-poppins font-bold'>Price Distribution</h2>

                                <p className="">The prize pool is funded by the NFT minting fees, which are used to mint new NFT Zombie tokens. The minted tokens are added to the pool, and their value is used to determine the size of the weekly prize pool.</p>

                                <p className="mt-4">
                                    When a user wins a prize, they will receive 80% of the total prize pool. The remaining 20% will be used to fund the Zombie ecosystem, which includes marketing, development, and other initiatives.
                                </p>
                            </div>
                        </AnimateLeft>



                    </div>

                    <div className="w-full flex items-center justify-center relative">
                        <AnimateRight>
                            <motion.img  whileInView={{ y: [0, -150], rotate: 360 }} transition={{duration: 1, repeat: Infinity, repeatType: "reverse" }} src="/coin.webp" alt="Coin" className="absolute w-20 -left-32 right-0 mx-auto top-20" />
                            <img src="/lottery.webp" alt="Lottery" className="w-[40rem] z-10 relative" />
                        </AnimateRight>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Ecosystem