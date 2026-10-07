import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={`container ${styles.container}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div className={styles.navLeft}>
            <div className={styles.menuIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </div>
            <div className={styles.logo}>Lune</div>
            <div className={styles.navLinks}>
              <a href="#">Home</a>
              <a href="#">Shop</a>
              <a href="#">Collections</a>
              <a href="#">About</a>
            </div>
          </div>
          <div className={styles.navRight}>
            <div className={styles.searchBar}>
              <input type="text" placeholder="Search for jewelry, hair accessories..." />
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

      <div className="container">
        {/* Hero Section */}
        <section className={styles.hero}>
          <img src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=1200&auto=format&fit=crop&q=80" alt="Beautiful girl with hair ribbon" className={styles.heroImage} />
          <div className={styles.heroContent}>
            <div className={styles.heroSubtitle}>Little Details<br/>A Brighter You</div>
            <h1 className={styles.heroTitle}>Jewelry &<br/>Beauty Essentials</h1>
            <p className={styles.heroDesc}>Trendy jewelry, hair accessories and cute essentials for your everyday glow.</p>
            <a href="#" className={styles.btnPrimary}>
              Shop Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </section>

        {/* Features */}
        <section className={styles.features}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </div>
            <div className={styles.featureText}>
              <h4>Free Shipping</h4>
              <p>On all orders over $99</p>
            </div>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <div className={styles.featureText}>
              <h4>High Quality</h4>
              <p>Trendy & durable</p>
            </div>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </div>
            <div className={styles.featureText}>
              <h4>Loved by 10K+</h4>
              <p>Happy Customers</p>
            </div>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
            </div>
            <div className={styles.featureText}>
              <h4>Easy Returns</h4>
              <p>Hassle free</p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className={styles.categories}>
          {[
            { name: "Necklaces", img: "https://images.unsplash.com/photo-1599643478524-fb66f70a0066?w=200&auto=format&fit=crop&q=80" },
            { name: "Hair Clips", img: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=200&auto=format&fit=crop&q=80" },
            { name: "Scrunchies", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&auto=format&fit=crop&q=80" },
            { name: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&auto=format&fit=crop&q=80" },
            { name: "Ribbons", img: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=200&auto=format&fit=crop&q=80" },
            { name: "Beauty", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&auto=format&fit=crop&q=80" },
            { name: "Gifts", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=200&auto=format&fit=crop&q=80" }
          ].map((cat, i) => (
            <div key={i} className={styles.categoryItem}>
              <img src={cat.img} alt={cat.name} className={styles.categoryImage} />
              <span className={styles.categoryName}>{cat.name}</span>
            </div>
          ))}
        </section>

        {/* Promo Banners */}
        <section className={styles.promoBanners}>
          <div className={styles.bannerLarge}>
            <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&auto=format&fit=crop&q=80" alt="Timeless Jewelry" className={styles.bannerImg} />
            <div className={styles.bannerContent}>
              <h2 className={styles.bannerTitle}>TIMELESS<br/>JEWELRY</h2>
              <p className={styles.bannerSubtitle}>for everyday moments</p>
              <a href="#" className={styles.btnSecondary}>
                Shop Jewelry
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>
          <div className={styles.promoGrid}>
            <div className={styles.bannerMedium}>
              <img src="https://images.unsplash.com/photo-1618331835717-801e976710b2?w=600&auto=format&fit=crop&q=80" alt="Hair Accessories" className={styles.bannerImg} />
              <div className={styles.bannerContent}>
                <h3 className={styles.bannerTitle}>Cute Hair<br/>Accessories</h3>
                <p className={styles.bannerSubtitle}>Clips, scrunchies, ribbons and more</p>
                <a href="#" className={`${styles.btnSecondary} ${styles.btnOutline}`}>
                  Shop Hair
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
              </div>
            </div>
            <div className={styles.bannerMedium}>
              <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&auto=format&fit=crop&q=80" alt="Beauty Essentials" className={styles.bannerImg} />
              <div className={styles.bannerContent}>
                <h3 className={styles.bannerTitle}>Beauty<br/>Essentials</h3>
                <p className={styles.bannerSubtitle}>Skincare, lip care and self-care picks</p>
                <a href="#" className={`${styles.btnSecondary} ${styles.btnOutline}`}>
                  Shop Beauty
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Bestsellers */}
        <section className={styles.bestsellers}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Bestsellers</h2>
            <a href="#" className={styles.viewAll}>View All <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
          </div>
          <div className={styles.productGrid}>
            {[
              { title: "Butterfly Pearl Necklace", price: "$49", oldPrice: "$69", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&auto=format&fit=crop&q=80", tag: "Bestseller" },
              { title: "Satin Hair Bow Clip", price: "$29", oldPrice: "$39", img: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=400&auto=format&fit=crop&q=80" },
              { title: "Pearl Bow Earrings", price: "$44", oldPrice: "$59", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&auto=format&fit=crop&q=80" },
              { title: "Floral Scrunchie", price: "$24", oldPrice: "$34", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&auto=format&fit=crop&q=80" },
              { title: "Glossy Lip Tint", price: "$39", oldPrice: "$54", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&auto=format&fit=crop&q=80" },
              { title: "Ribbon Hair Clip Set", price: "$34", oldPrice: "$49", img: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=400&auto=format&fit=crop&q=80" },
            ].map((prod, i) => (
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
                  <span>4.8 (120)</span>
                </div>
                <button className={styles.addToCart}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Banners */}
        <section className={styles.footerBanners}>
          <div className={styles.bannerMedium}>
            <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&auto=format&fit=crop&q=80" alt="Gifts" className={styles.bannerImg} />
            <div className={styles.bannerContent}>
              <h3 className={styles.bannerTitle}>Gift Something<br/>Special</h3>
              <p className={styles.bannerSubtitle}>Beautiful picks for your loved ones</p>
              <a href="#" className={`${styles.btnSecondary} ${styles.btnOutline}`}>
                Shop Gifts
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>
          <div className={styles.bannerMedium}>
            <img src="https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=600&auto=format&fit=crop&q=80" alt="New Arrivals" className={styles.bannerImg} />
            <div className={styles.bannerContent}>
              <h3 className={styles.bannerTitle} style={{color: '#fff'}}>New Arrivals</h3>
              <p className={styles.bannerSubtitle}>Fresh styles. Same you.</p>
              <a href="#" className={styles.btnSecondary}>
                Explore Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div className={styles.footerCol}>
              <h3>Lune</h3>
              <p className={styles.footerDesc}>Jewelry • Accessories • Beauty<br/>For your everyday glow.</p>
              <div className={styles.socialLinks}>
                <a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                <a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                <a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
              </div>
            </div>
            <div className={styles.footerCol}>
              <h4>Shop</h4>
              <div className={styles.footerLinks}>
                <a href="#">All Products</a>
                <a href="#">Jewelry</a>
                <a href="#">Hair Accessories</a>
                <a href="#">Beauty</a>
                <a href="#">Gift Sets</a>
              </div>
            </div>
            <div className={styles.footerCol}>
              <h4>Help</h4>
              <div className={styles.footerLinks}>
                <a href="#">Track Order</a>
                <a href="#">Shipping Info</a>
                <a href="#">Returns & Exchanges</a>
                <a href="#">FAQs</a>
                <a href="#">Contact Us</a>
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
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Nav Bar */}
      <div className={styles.mobileNav}>
        <div className={`${styles.mobileNavItem} ${styles.active}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <span>Home</span>
        </div>
        <div className={styles.mobileNavItem}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          <span>Shop</span>
        </div>
        <div className={styles.mobileNavItem}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          <span>Wishlist</span>
        </div>
        <div className={styles.mobileNavItem}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Account</span>
        </div>
      </div>
    </main>
  );
}
