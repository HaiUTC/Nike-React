import Link from 'next/link'
const HeaderList = () => {
    return (
        <div className="m-auto ">
            <ul className='flex'>
              <li>
                <Link href="/men"><a id='collection' className='text-lg p-6'>Men</a></Link>
                <div id="listCategory" className="absolute justify-between px-56 left-0 top-28 w-full hidden pt-4 pb-16 bg-white">
                  <div>
                    <div className="text-lg"><h4>Featured</h4></div>
                    <div>
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>New Releases</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Launch Calendar</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Member Access</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Neutrain</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Materials</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Air Force 1</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Sale</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg"><h4>Shoes</h4></div>
                    <div>
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>New Sneakers</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>All Shoe</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Life Style</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Running</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Basketball</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Jordan</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Football</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Gym and Tranning</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Tennis</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Sliders</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Customise</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>All Sale Shoe</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg"><h4>Clothings</h4></div>
                    <div>
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>All Clothings</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Top and T-Shirts</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Jeyseys and Kids</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Hoodies</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Jacket and Gillets</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Pants and Leggings</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Tracksuits</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Compression</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Shorts</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Caps</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Bags and Backpacks</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Accessories and Equiment</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>All Sale Clothing</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg"><h4>Shop By Sports</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>Running</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Football</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Basketball</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Gym and Trainning</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Skateboarding</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Tennis</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Golf</a></Link></li>
                      </ul>
                    </div>
                    <br />
                    <br />
                    <div className="text-lg"><h4>Shop By Brand</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>Nike Sportwear</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>NikeLab</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Nike By You</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Jordan</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>ACG</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>NBA</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Nike SB</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg"><h4>Icons</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>Air Force 1</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Pegasus</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Blazer</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Air Jordan 1</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Air Max</a></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/woman"><a id='collection' className='text-lg p-6'>Woman</a></Link>
                <div id="listCategory" className="absolute justify-between px-56 left-0 top-28 w-full hidden pt-4 pb-16 bg-white">
                  <div>
                    <div className="text-lg"><h4>Featured</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>New Releases</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Launch Calendar</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Member Access</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Neutrain</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Air Force 1</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Nike Icon Clash</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Sale</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg"><h4>Shoes</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>New Sneakers</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>All Shoe</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Life Style</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Running</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Basketball</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Jordan</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Football</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Gym and Tranning</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Tennis</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Sliders</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Customise</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>All Sale Shoe</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg"><h4>Clothings</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>All Clothings</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Sport Bras</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Top and T-Shirts</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Jeyseys and Kids</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Hoodies</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Jacket and Gillets</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Pants and Leggings</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Tracksuits</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Compression</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Shorts</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Caps</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Bags and Backpacks</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Accessories and Equiment</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>All Sale Clothing</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg"><h4>Shop By Sport</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>Running</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Football</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Basketball</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Gym and Trainning</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Yoga</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Skateboarding</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Tennis</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Golf</a></Link></li>
                      </ul>
                    </div>
                    <br />
                    <br />
                    <div className="text-lg"><h4>Shop By Brand</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>Nike Sportwear</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>NikeLab</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Nike By You</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Jordan</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Yoga</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>ACG</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>NBA</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Nike SB</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg"><h4>Icons</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>Air Force 1</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Pegasus</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Blazer</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Air Jordan 1</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Air Max</a></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/kid"><a id='collection' className='text-lg p-6'>Kids</a></Link>
                <div id="listCategory" className="absolute justify-between px-56 left-0 top-28 w-full hidden pt-4 pb-16 bg-white">
                  <div>
                    <div className="text-lg"><h4>Featured</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>New Releases</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Launch Calendar</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Member Access</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Neutrain</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Air Force 1</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Sale</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg"><h4>Boy's Shoes</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>Older Kids (3-6.5)</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Younger Kids (10-2.5)</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Baby and Toddler (1.5 - 9.5)</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Lifestyle</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Running</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Basketball</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Jordan</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Football</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>All Shoes</a></Link></li>
                      </ul>
                    </div>
                    <br />
                    <br />
                    
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>Tops and T-Shirts</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Hoodies</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Pants and Leggings</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Shorts</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>All Boy's Clothing</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg"><h4>Girl's Shoes</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>Older Kids (3-6.5)</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Younger Kids (10-2.5)</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Baby and Toddler (1.5 - 9.5)</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Lifestyle</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Running</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Basketball</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Jordan</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Football</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>All Shoes</a></Link></li>
                      </ul>
                    </div>
                    <br />
                    <br />
                    <div className="text-lg"><h4>Girl's Clothings</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>Tops and T-Shirts</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Hoodies</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Pants and Leggings</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Shorts</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>All Boy's Clothing</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg"><h4>Accessories and Equipment</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>Balls</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Bags and Backpacks</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Socks</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Hats and Headwear</a></Link></li>
                      </ul>
                    </div>
                    <br />
                    <br />
                    <div className="text-lg"><h4>Shop By Sport</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>Running</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>American Football</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Basketball</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Gym and Trainning</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Tennis</a></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/customise"><a id='collection' className='text-lg p-6'>Customise</a></Link>
                <div id="listCategory" className="absolute justify-between px-56 left-0 top-28 w-full hidden pt-4 pb-16 bg-white">
                  <div>
                    <div className="text-lg"><h4>Featured</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>Nike By You</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>New Releases</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg"><h4>Nike By You</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>Men</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Women</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg"><h4>Nike By Sport</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>Lifestyle</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Running</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Basketball</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Jordan</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Football</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg"><h4>Icons</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>Air Force 1</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Pegasus</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Blazer</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Air Jordan 1</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Air Max</a></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/sale"><a id='collection' className='text-lg p-6'>Sale</a></Link>
                <div id="listCategory" className="absolute justify-between px-56 left-0 top-28 w-full hidden pt-4 pb-16 bg-white">
                  <div>
                    <div className="text-lg"><h4>Featured</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>Shop All Shoe</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg"><h4>Men's Sale</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>Shoes</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Clothing</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Accessories and Equiment</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg"><h4>Women's Sale</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>Shoes</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Clothing</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Accessories and Equiment</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg"><h4>Kid's Sale</h4></div>
                    <div className="lm-info">
                      <ul>
                        <li><Link href="/"><a className='text-gray-500 flex'>Shoes</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Clothing</a></Link></li>
                        <li><Link href="/"><a className='text-gray-500 flex'>Accessories and Equiment</a></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/snkrs"><a className='text-lg p-6'>SNKRS</a></Link>
              </li>
            </ul>
          </div>
    )
}
export default HeaderList