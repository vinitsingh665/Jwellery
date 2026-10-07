import Image from "next/image";
import Link from "next/link";
import styles from "./collections.module.css";

export default function Collections() {
  const products = [
    { title: "Satin Hair Bow Clip", price: "₹299", oldPrice: "₹399", rating: "4.8 (120)", img: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=400&auto=format&fit=crop&q=80", tag: "Bestseller" },
    { title: "Butterfly Pearl Necklace", price: "₹499", oldPrice: "₹699", rating: "4.7 (98)", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&auto=format&fit=crop&q=80" },
    { title: "Floral Scrunchie", price: "₹249", oldPrice: "₹349", rating: "4.9 (76)", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&auto=format&fit=crop&q=80", tag: "New" },
    { title: "Pearl Bow Earrings", price: "₹449", oldPrice: "₹599", rating: "4.8 (102)", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&auto=format&fit=crop&q=80" },
    { title: "Ribbon Hair Clip Set", price: "₹349", oldPrice: "₹499", rating: "4.7 (88)", img: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=400&auto=format&fit=crop&q=80" },
    { title: "Glossy Lip Tint", price: "₹399", oldPrice: "₹549", rating: "4.6 (64)", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&auto=format&fit=crop&q=80" },
    { title: "Hydrating Skincare Set", price: "₹899", oldPrice: "₹1,299", rating: "4.8 (91)", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&auto=format&fit=crop&q=80" },
    { title: "Gift Box (Small)", price: "₹199", oldPrice: "", rating: "4.9 (55)", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&auto=format&fit=crop&q=80" },
    { title: "Pearl Hair Claw Clip", price: "₹299", oldPrice: "", rating: "4.7 (63)", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&auto=format&fit=crop&q=80", tag: "New" },
    { title: "Heart Pendant Necklace", price: "₹549", oldPrice: "₹799", rating: "4.8 (80)", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&auto=format&fit=crop&q=80" },
    { title: "Minimal Hair Clips (Set of 3)", price: "₹299", oldPrice: "₹499", rating: "4.6 (70)", img: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=400&auto=format&fit=crop&q=80" },
    { title: "Beauty Pouch", price: "₹399", oldPrice: "₹599", rating: "4.8 (68)", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&auto=format&fit=crop&q=80" }
  ];

  return (
    <main className={styles.main}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div className={styles.navLeft}>
            <div className={styles.menuIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </div>
            <Link href="/" className={styles.logo}>Lune</Link>
            <div className={styles.navLinks}>
              <Link href="/">Home</Link>
              <Link href="#">Shop</Link>
              <Link href="/collections" className={styles.active}>Collections</Link>
              <Link href="#">About</Link>
            </div>
          </div>
          <div className={styles.navRight}>
            <div className={styles.searchBar}>
              <input type="text" placeholder="Search for hair clips, necklaces, beauty..." />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <button className={`${styles.iconBtn} ${styles.hideMobile}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
            <button className={styles.iconBtn}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              <span className={styles.badge}>2</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <img src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=1200&auto=format&fit=crop&q=80" alt="Beautiful girl with hair ribbon" className={styles.heroImage} />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroSubtitle}>OUR COLLECTIONS</div>
          <h1 className={styles.heroTitle}>Little Things<br/>Big Happiness</h1>
          <p className={styles.heroDesc}>Explore our handpicked collections of jewelry, hair accessories and beauty essentials — thoughtfully made for your everyday glow.</p>
        </div>
      </section>

      <div className="container">
        {/* Categories Row */}
        <section className={styles.categories}>
          {[
            { name: "All", img: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=200&auto=format&fit=crop&q=80", active: true },
            { name: "Jewelry", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&auto=format&fit=crop&q=80" },
            { name: "Hair Clips", img: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=200&auto=format&fit=crop&q=80" },
            { name: "Scrunchies", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&auto=format&fit=crop&q=80" },
            { name: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&auto=format&fit=crop&q=80" },
            { name: "Ribbons", img: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=200&auto=format&fit=crop&q=80" },
            { name: "Beauty", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&auto=format&fit=crop&q=80" },
            { name: "Gifts", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&auto=format&fit=crop&q=80" }
          ].map((cat, i) => (
            <div key={i} className={`${styles.categoryItem} ${cat.active ? styles.active : ''}`}>
              <div className={styles.categoryImageWrap}>
                <img src={cat.img} alt={cat.name} className={styles.categoryImage} />
              </div>
              <span className={styles.categoryName}>{cat.name}</span>
            </div>
          ))}
        </section>

        {/* Main Layout */}
        <div className={styles.layout}>
          
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.filterHeader}>
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                Filters
              </h3>
              <span className={styles.clearAll}>Clear All</span>
            </div>

            <div className={styles.filterSection}>
              <div className={styles.filterTitle}>Categories <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg></div>
              <div className={styles.filterList}>
                <label className={styles.filterCheckbox}><input type="checkbox" defaultChecked /> All</label>
                <label className={styles.filterCheckbox}><input type="checkbox" /> Jewelry <span className={styles.count}>(124)</span></label>
                <label className={styles.filterCheckbox}><input type="checkbox" /> Hair Accessories <span className={styles.count}>(186)</span></label>
                <label className={styles.filterCheckbox}><input type="checkbox" /> Beauty <span className={styles.count}>(52)</span></label>
                <label className={styles.filterCheckbox}><input type="checkbox" /> Gifts <span className={styles.count}>(35)</span></label>
              </div>
            </div>

            <div className={styles.filterSection}>
              <div className={styles.filterTitle}>Price Range <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg></div>
              <input type="range" min="0" max="1999" defaultValue="1999" className={styles.priceSlider} />
              <div className={styles.priceRange}>
                <span>₹0</span>
                <span>₹1,999</span>
              </div>
            </div>

            <div className={styles.filterSection}>
              <div className={styles.filterTitle}>Color <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg></div>
              <div className={styles.colorList}>
                <label className={styles.colorItem}><div className={styles.colorSwatch} style={{background: '#DDA7A5'}}></div> Pink</label>
                <label className={styles.colorItem}><div className={styles.colorSwatch} style={{background: '#E6D3C4'}}></div> Beige</label>
                <label className={styles.colorItem}><div className={styles.colorSwatch} style={{background: '#FFFFFF'}}></div> White</label>
                <label className={styles.colorItem}><div className={styles.colorSwatch} style={{background: '#2A2522'}}></div> Black</label>
                <label className={styles.colorItem}><div className={styles.colorSwatch} style={{background: '#9B7ED9'}}></div> Purple</label>
                <label className={styles.colorItem}><div className={styles.colorSwatch} style={{background: '#5B8AD9'}}></div> Blue</label>
                <label className={styles.colorItem}><div className={styles.colorSwatch} style={{background: '#6BB374'}}></div> Green</label>
                <label className={styles.colorItem}><div className={styles.colorSwatch} style={{background: '#D95B5B'}}></div> Red</label>
              </div>
            </div>

            <div className={styles.filterSection}>
              <div className={styles.filterTitle}>Material <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
              <div className={styles.filterList}>
                <label className={styles.filterCheckbox}><input type="checkbox" /> Pearl</label>
                <label className={styles.filterCheckbox}><input type="checkbox" /> Stainless Steel</label>
                <label className={styles.filterCheckbox}><input type="checkbox" /> Alloy</label>
                <label className={styles.filterCheckbox}><input type="checkbox" /> Fabric</label>
                <label className={styles.filterCheckbox}><input type="checkbox" /> Silk</label>
                <label className={styles.filterCheckbox}><input type="checkbox" /> Resin</label>
                <label className={styles.filterCheckbox}><input type="checkbox" /> Acrylic</label>
              </div>
            </div>

            <div className={styles.filterSection} style={{borderBottom: 'none'}}>
              <div className={styles.filterTitle}>Occasion <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
              <div className={styles.filterList}>
                <label className={styles.filterCheckbox}><input type="checkbox" /> Everyday</label>
                <label className={styles.filterCheckbox}><input type="checkbox" /> Party</label>
                <label className={styles.filterCheckbox}><input type="checkbox" /> Wedding</label>
                <label className={styles.filterCheckbox}><input type="checkbox" /> Gifting</label>
                <label className={styles.filterCheckbox}><input type="checkbox" /> Festive</label>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className={styles.content}>
            <div className={styles.contentHeader}>
              <div className={styles.contentTitleArea}>
                <h2>All Collections</h2>
                <p>Discover pieces that match your vibe.</p>
              </div>
              <div className={styles.toolbar}>
                <button className={styles.mobileFilterBtn}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                  Filters <span className={styles.filterBadge}>1</span>
                </button>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem'}}>
                  <div className={styles.sortDropdown}>
                    Sort by <span style={{fontWeight: 500}}>Featured</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                  <span className={styles.productCount}>186 products</span>
                </div>
              </div>
            </div>

            <div className={styles.productGrid}>
              {products.map((prod, i) => (
                <div key={i} className={styles.productCard}>
                  <div className={styles.productImageWrapper}>
                    {prod.tag && <span className={styles.badgeTag}>{prod.tag}</span>}
                    <button className={styles.wishlistBtn}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                    <img src={prod.img} alt={prod.title} className={styles.productImg} />
                  </div>
                  <h4 className={styles.productTitle}>{prod.title}</h4>
                  <div className={styles.productPrice}>
                    <span className={styles.currentPrice}>{prod.price}</span>
                    {prod.oldPrice && <span className={styles.oldPrice}>{prod.oldPrice}</span>}
                  </div>
                  <div className={styles.productRating}>
                    <svg className={styles.star} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <span>{prod.rating}</span>
                  </div>
                  <button className={styles.addToCart}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.pagination}>
              <button className={`${styles.pageBtn} ${styles.navBtn}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
              <button className={styles.pageBtn}>2</button>
              <button className={styles.pageBtn}>3</button>
              <button className={styles.pageBtn}>4</button>
              <button className={styles.pageBtn}>5</button>
              <span>...</span>
              <button className={styles.pageBtn}>16</button>
              <button className={`${styles.pageBtn} ${styles.navBtn}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div className={styles.footerCol}>
              <h3>Lune</h3>
              <p className={styles.footerDesc}>Jewelry • Accessories • Beauty<br/>For your everyday glow.</p>
              <div className={styles.socialLinks}>
                <Link href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></Link>
                <Link href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></Link>
                <Link href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></Link>
              </div>
            </div>
            <div className={styles.footerCol}>
              <h4>Shop</h4>
              <div className={styles.footerLinks}>
                <Link href="#">All Products</Link>
                <Link href="#">Jewelry</Link>
                <Link href="#">Hair Accessories</Link>
                <Link href="#">Beauty</Link>
                <Link href="#">Gift Sets</Link>
              </div>
            </div>
            <div className={styles.footerCol}>
              <h4>Help</h4>
              <div className={styles.footerLinks}>
                <Link href="#">Track Order</Link>
                <Link href="#">Shipping Info</Link>
                <Link href="#">Returns & Exchanges</Link>
                <Link href="#">FAQs</Link>
                <Link href="#">Contact Us</Link>
              </div>
            </div>
            <div className={styles.footerCol}>
              <h4>Join Our Newsletter</h4>
              <p className={styles.footerDesc}>Get exclusive offers, new arrivals and more.</p>
              <form className={styles.newsletterInput}>
                <input type="email" placeholder="Your email address" />
                <button type="submit">→</button>
              </form>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <p>&copy; 2024 Lune. All rights reserved.</p>
            <div className={styles.footerLinks} style={{flexDirection: 'row'}}>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
              <Link href="#">Contact</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Nav Bar */}
      <div className={styles.mobileNav}>
        <Link href="/" className={styles.mobileNavItem}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <span>Home</span>
        </Link>
        <Link href="/collections" className={`${styles.mobileNavItem} ${styles.active}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          <span>Collections</span>
        </Link>
        <Link href="#" className={styles.mobileNavItem}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          <span>Wishlist</span>
        </Link>
        <Link href="#" className={styles.mobileNavItem}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Account</span>
        </Link>
      </div>
    </main>
  );
}
