import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  X,
  MapPin,
  Phone,
  User,
  Package,
  CreditCard,
  CheckCircle2,
  Clock,
  Truck,
} from "lucide-react";

const OrderForm = ({ product, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    quantity: "1",
    region: "",
    area: "",
    landmark: "",
    paymentMethod: "mpesa",
    notes: "",
  });

  // Arusha locations organized by zones
  const arushaLocations = {
    "Central Arusha": [
      "Kaloleni",
      "Kijenge",
      "Sekei",
      "Themi",
      "Levolosi",
      "Elerai",
      "Sombetini",
      "Terrat",
    ],
    "Eastern Arusha": [
      "Njiro",
      "Sakina",
      "Ngarenaro",
      "Unga Limited",
      "Moshono",
      "Kimandolu",
    ],
    "Western Arusha": ["Baraa", "Lemara", "Sokon II", "Nane Nane", "Mianzini"],
    "Northern Arusha": ["Kwa Idd", "Mlangarini", "Muriet", "Meru", "Usa River"],
    "Southern Arusha": ["Olasiti", "Chang'ombe", "Singisi", "TFA", "Ngalimoto"],
  };

  // Delivery fees per zone
  const deliveryFees = {
    "Central Arusha": 3000,
    "Eastern Arusha": 4000,
    "Western Arusha": 4000,
    "Northern Arusha": 5000,
    "Southern Arusha": 5000,
  };

  const subtotal =
    parseFloat(product.price.replace(/,/g, "")) *
    parseInt(formData.quantity || "1");
  const deliveryFee = formData.region ? deliveryFees[formData.region] : 0;
  const total = subtotal + deliveryFee;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      onClose();
    }, 3000);
  };

  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className='fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        className='bg-white rounded-3xl max-w-4xl w-full shadow-2xl overflow-y-auto'
        style={{ maxHeight: "90vh" }}>
        {/* Success State */}
        <AnimatePresence>
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='absolute inset-0 bg-white z-50 flex flex-col items-center justify-center p-8'>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
                className='w-24 h-24 rounded-full bg-[#609F4D] flex items-center justify-center mb-6'>
                <CheckCircle2 className='w-12 h-12 text-white' />
              </motion.div>
              <h3 className='text-3xl font-black text-gray-900 mb-3'>
                Order Received!
              </h3>
              <p className='text-lg text-gray-600 text-center max-w-md'>
                Thank you! We'll call you at{" "}
                <span className='font-bold'>{formData.phone}</span> to confirm
                delivery details.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className='grid grid-cols-1 lg:grid-cols-5'>
          {/* LEFT: Order Summary Sidebar */}
          <motion.div
            className='lg:col-span-2 bg-gradient-to-br from-[#609F4D] to-[#5a8f44] text-white p-6 md:p-8'
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}>
            <div className='space-y-6'>
              <div>
                <h3 className='text-2xl font-black mb-2'>Order Summary</h3>
                <p className='text-white/80 text-sm'>
                  Review your order details
                </p>
              </div>

              {/* Product Info */}
              <motion.div
                className='bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20'
                whileHover={{ scale: 1.02 }}>
                <div className='flex items-start gap-4'>
                  <div className='w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0'>
                    <Package className='w-8 h-8 text-white' />
                  </div>
                  <div className='flex-1'>
                    <p className='text-xs text-white/70 mb-1'>
                      {product.category}
                    </p>
                    <h4 className='font-bold text-lg leading-tight mb-1'>
                      {product.name}
                    </h4>
                    <p className='text-sm text-white/80'>{product.size}</p>
                  </div>
                </div>

                <div className='mt-4 pt-4 border-t border-white/20 space-y-2'>
                  <div className='flex justify-between text-sm'>
                    <span className='text-white/80'>Unit Price:</span>
                    <span className='font-bold'>TZS {product.price}</span>
                  </div>
                  <div className='flex justify-between text-sm'>
                    <span className='text-white/80'>Quantity:</span>
                    <span className='font-bold'>{formData.quantity}x</span>
                  </div>
                </div>
              </motion.div>

              {/* Price Breakdown */}
              <div className='bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 space-y-3'>
                <div className='flex justify-between text-sm'>
                  <span className='text-white/80'>Subtotal:</span>
                  <span className='font-bold'>TZS {formatPrice(subtotal)}</span>
                </div>
                <div className='flex justify-between text-sm'>
                  <span className='text-white/80'>Delivery Fee:</span>
                  <span className='font-bold'>
                    {deliveryFee
                      ? `TZS ${formatPrice(deliveryFee)}`
                      : "Select location"}
                  </span>
                </div>
                <div className='pt-3 border-t border-white/30 flex justify-between'>
                  <span className='font-bold text-lg'>Total:</span>
                  <span className='font-black text-2xl text-[#E8252B]'>
                    TZS {formatPrice(total)}
                  </span>
                </div>
              </div>

              {/* Delivery Info */}
              <div className='flex items-start gap-3 text-sm text-white/80'>
                <Clock className='w-5 h-5 flex-shrink-0 mt-0.5' />
                <p>
                  Expected delivery:{" "}
                  <span className='font-bold text-white'>2-4 hours</span> after
                  confirmation
                </p>
              </div>

              <div className='flex items-start gap-3 text-sm text-white/80'>
                <Truck className='w-5 h-5 flex-shrink-0 mt-0.5' />
                <p>
                  Free delivery on orders above{" "}
                  <span className='font-bold text-white'>TZS 50,000</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Form Section */}
          <div className='lg:col-span-3 p-6 md:p-8 relative'>
            {/* Close Button */}
            <button
              onClick={onClose}
              className='absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors'>
              <X className='w-6 h-6' />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <h2 className='text-3xl font-black text-gray-900 mb-2'>
                Complete Your Order
              </h2>
              <p className='text-gray-600 mb-8'>
                Fill in your details for fast delivery
              </p>

              <div className='space-y-6'>
                {/* Contact Information */}
                <div className='space-y-4'>
                  <h3 className='font-bold text-lg text-gray-900 flex items-center gap-2'>
                    <User className='w-5 h-5 text-[#609F4D]' />
                    Contact Information
                  </h3>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Full Name *
                    </label>
                    <input
                      type='text'
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder='Enter your full name'
                      className='w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#609F4D] focus:outline-none transition-colors text-base'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Phone Number *
                    </label>
                    <div className='relative'>
                      <Phone className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                      <input
                        type='tel'
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder='+255 XXX XXX XXX'
                        className='w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#609F4D] focus:outline-none transition-colors text-base'
                      />
                    </div>
                  </div>
                </div>

                {/* Delivery Location */}
                <div className='space-y-4 pt-6 border-t border-gray-200'>
                  <h3 className='font-bold text-lg text-gray-900 flex items-center gap-2'>
                    <MapPin className='w-5 h-5 text-[#609F4D]' />
                    Delivery Location
                  </h3>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Zone / Region *
                    </label>
                    <select
                      required
                      value={formData.region}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          region: e.target.value,
                          area: "",
                        })
                      }
                      className='w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#609F4D] focus:outline-none transition-colors text-base bg-white'>
                      <option value=''>Select your zone</option>
                      {Object.keys(arushaLocations).map((region) => (
                        <option key={region} value={region}>
                          {region} - TZS {formatPrice(deliveryFees[region])}
                        </option>
                      ))}
                    </select>
                  </div>

                  {formData.region && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>
                        Specific Area *
                      </label>
                      <select
                        required
                        value={formData.area}
                        onChange={(e) =>
                          setFormData({ ...formData, area: e.target.value })
                        }
                        className='w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#609F4D] focus:outline-none transition-colors text-base bg-white'>
                        <option value=''>Select your area</option>
                        {arushaLocations[formData.region].map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                  )}

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Street / Landmark (Optional)
                    </label>
                    <input
                      type='text'
                      value={formData.landmark}
                      onChange={(e) =>
                        setFormData({ ...formData, landmark: e.target.value })
                      }
                      placeholder='e.g., Near Shoppers Plaza, Blue house'
                      className='w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#609F4D] focus:outline-none transition-colors text-base'
                    />
                  </div>
                </div>

                {/* Quantity */}
                <div className='pt-6 border-t border-gray-200'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Quantity *
                  </label>
                  <input
                    type='number'
                    min='1'
                    required
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                    className='w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#609F4D] focus:outline-none transition-colors text-base'
                  />
                </div>

                {/* Payment Method */}
                <div className='space-y-4 pt-6 border-t border-gray-200'>
                  <h3 className='font-bold text-lg text-gray-900 flex items-center gap-2'>
                    <CreditCard className='w-5 h-5 text-[#609F4D]' />
                    Payment Method
                  </h3>

                  <div className='space-y-3'>
                    <label className='flex items-center gap-4 p-4 rounded-xl border-2 border-[#609F4D] bg-[#609F4D]/5 cursor-pointer'>
                      <input
                        type='radio'
                        name='payment'
                        value='mpesa'
                        checked={formData.paymentMethod === "mpesa"}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            paymentMethod: e.target.value,
                          })
                        }
                        className='w-5 h-5 text-[#609F4D]'
                      />
                      <div className='flex-1'>
                        <div className='font-bold text-gray-900'>
                          M-Pesa (Lipa Namba)
                        </div>
                        <div className='text-sm text-gray-600'>
                          Pay via mobile money
                        </div>
                      </div>
                    </label>

                    <label className='flex items-center gap-4 p-4 rounded-xl border-2 border-gray-200 hover:border-[#609F4D] cursor-pointer transition-colors'>
                      <input
                        type='radio'
                        name='payment'
                        value='cod'
                        checked={formData.paymentMethod === "cod"}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            paymentMethod: e.target.value,
                          })
                        }
                        className='w-5 h-5 text-[#609F4D]'
                      />
                      <div className='flex-1'>
                        <div className='font-bold text-gray-900'>
                          Cash on Delivery
                        </div>
                        <div className='text-sm text-gray-600'>
                          Pay when you receive
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder='Any special instructions?'
                    rows='3'
                    className='w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#609F4D] focus:outline-none transition-colors text-base resize-none'
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type='button'
                  onClick={handleSubmit}
                  disabled={
                    isSubmitting ||
                    !formData.name ||
                    !formData.phone ||
                    !formData.region ||
                    !formData.area
                  }
                  className='w-full py-4 rounded-xl font-bold text-lg text-white relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed'
                  style={{ background: "#609F4D" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}>
                  <span className='relative z-10'>
                    {isSubmitting ? "Processing..." : "Place Order"}
                  </span>
                  <motion.div
                    className='absolute inset-0'
                    style={{ background: "#E8252B" }}
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.button>

                <p className='text-xs text-gray-500 text-center'>
                  📞 Need help? Call us:{" "}
                  <span className='font-bold'>
                    +255 784 240 780/745 330 042
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OrderForm;
