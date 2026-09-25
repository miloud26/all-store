import { useEffect, useRef, useState } from "react";
import { Button, Divider, Rating, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import Form from "./Form";
import { data } from "../data";

export default function ProductPage({ productId }) {
  const product = data.find((item) => item.id === productId);
  const formRef = useRef(null);
  const [showMobileAction, setShowMobileAction] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowMobileAction(window.scrollY > 520);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!product) return null;

  const descriptions = [
    product.descImag || product.descImag1,
    product.descImag2,
    product.descImag3,
  ].filter(Boolean);

  const goToForm = () =>
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <main className="product-page" dir="rtl">
      <div className={`mobile-order-bar ${showMobileAction ? "is-visible" : ""}`}>
        <Button onClick={goToForm} fullWidth variant="contained">
          أطلب الآن — الدفع عند الاستلام
        </Button>
      </div>

      <div className="product-layout">
        <section className="product-gallery" aria-label="صورة المنتج">
          <img id="mainImg" src={product.themImg} alt={product.name} />
        </section>

        <section className="product-card">
          <div className="product-heading">
            <Typography id="title" component="h1">{product.name}</Typography>
            {product.slug && <Typography className="product-subtitle">{product.slug}</Typography>}
            {product.phone && (
              <a className="product-phone" href={`tel:${product.phone}`}>
                رقم الهاتف: <span dir="ltr">{product.phone}</span>
              </a>
            )}
            <div className="rating-row">
              <Rating value={5} readOnly aria-label="5 نجوم" />
              <span>منتج مختار بعناية</span>
            </div>
          </div>

          <div className="price-row">
            <div className="current-price"><span id="price">{product.price}</span><small>دج</small></div>
            {product.hashprice && <div className="old-price">{product.hashprice} دج</div>}
          </div>

          <div className="trust-grid">
            <div><PaymentsOutlinedIcon /><span>الدفع عند الاستلام</span></div>
            <div><LocalShippingOutlinedIcon /><span>توصيل سريع</span></div>
            <div><VerifiedOutlinedIcon /><span>طلب آمن</span></div>
          </div>

          <div ref={formRef} className="form-anchor"><Form id={productId} /></div>
          <Divider />

          {descriptions.length > 0 && (
            <div className="description-gallery">
              {descriptions.map((src, index) => (
                <img key={src} src={src} alt={`${product.name} - تفاصيل ${index + 1}`} loading="lazy" />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
