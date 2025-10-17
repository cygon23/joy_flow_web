import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

// Single-file modern Privacy & Terms component
// Theme primary color: #61A141

export default function PrivacyTermsPage(): JSX.Element {
  const [tab, setTab] = useState<"privacy" | "terms">("privacy");

  const primary = "#61A141";

  return (
    <div className='min-h-screen bg-slate-50 flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-5xl bg-white rounded-2xl shadow-lg ring-1 ring-slate-200 overflow-hidden'>
        {/* Header */}
        <div className='flex items-center justify-between gap-4 p-6 border-b border-slate-100'>
          <div className='flex items-center gap-4'>
            <div
              className='flex items-center justify-center rounded-md p-2'
              style={{ background: `${primary}22` }}>
              <ShieldCheck className='h-6 w-6' style={{ color: primary }} />
            </div>
            <div>
              <h1 className='text-lg font-semibold text-slate-900'>
                Privacy & Terms
              </h1>
              <p className='text-sm text-slate-500'>
                Privacy Policy and Terms of Service for African Joy Dairy Ltd
              </p>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <Button
              variant='ghost'
              onClick={() => setTab("privacy")}
              className={`rounded-md px-3 py-2 ${
                tab === "privacy"
                  ? "font-semibold text-white"
                  : "text-slate-600"
              }`}
              style={tab === "privacy" ? { background: primary } : undefined}>
              <BookOpen className='h-4 w-4 mr-2 inline' /> Privacy Policy
            </Button>

            <Button
              variant='ghost'
              onClick={() => setTab("terms")}
              className={`rounded-md px-3 py-2 ${
                tab === "terms" ? "font-semibold text-white" : "text-slate-600"
              }`}
              style={tab === "terms" ? { background: primary } : undefined}>
              <FileText className='h-4 w-4 mr-2 inline' /> Terms of Service
            </Button>
          </div>
        </div>

        {/* Content: header stays fixed, content scrolls inside */}
        <div className='p-6'>
          <AnimatePresence mode='wait'>
            {tab === "privacy" ? (
              <motion.div
                key='privacy'
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
                className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  <div className='col-span-2'>
                    <h2 className='text-2xl font-semibold text-slate-900'>
                      Privacy Policy
                    </h2>
                    <p className='mt-2 text-sm text-slate-600'>
                      Effective Date: October 2025
                    </p>
                  </div>
                  <div className='hidden md:block text-sm text-slate-500'>
                    <div
                      className='rounded-lg p-3'
                      style={{
                        background: "#f6fff6",
                        border: `1px solid ${primary}22`,
                      }}>
                      <p className='text-xs font-medium text-slate-700'>
                        Contact
                      </p>
                      <p className='mt-1 text-xs text-slate-600'>
                        African Joy Dairy Ltd
                        <br />
                        Arusha, Tanzania
                        <br />
                        <a
                          className='text-[10px] text-emerald-700 underline'
                          href='mailto:info@africanjoy.co.tz'>
                          info@africanjoy.co.tz
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className='h-[60vh] overflow-auto rounded-lg border border-slate-100 p-6 bg-white'>
                  <article className='prose prose-sm max-w-none text-slate-700'>
                    <h3>Introduction</h3>
                    <p>
                      African Joy Dairy Ltd ("African Joy", "we", "us", or
                      "our") respects your privacy and is committed to
                      protecting your personal information. This Privacy Policy
                      explains how we collect, use, store, and protect your data
                      when you visit our website, place an order, or interact
                      with our products and services.
                    </p>

                    <h3>Information We Collect</h3>
                    <p>
                      We collect personal, delivery, transaction, and technical
                      information including your name, phone number, email,
                      delivery address, payment method, and browsing activity.
                    </p>

                    <h3>How We Use Your Information</h3>
                    <p>
                      Your data helps us process orders, deliver products,
                      communicate updates, and improve our services. We never
                      sell or rent your data.
                    </p>

                    <h3>Data Sharing and Disclosure</h3>
                    <p>
                      We share information only with delivery partners, payment
                      providers, and regulatory authorities when legally
                      required.
                    </p>

                    <h3>Data Retention and Security</h3>
                    <p>
                      We retain data as long as necessary and use secure,
                      encrypted systems to protect your information.
                    </p>

                    <h3>Your Rights</h3>
                    <p>
                      You may access, correct, or request deletion of your data
                      by contacting{" "}
                      <a
                        className='text-emerald-700 underline'
                        href='mailto:info@africanjoy.co.tz'>
                        info@africanjoy.co.tz
                      </a>
                      .
                    </p>

                    <h3>Cookies and Tracking</h3>
                    <p>
                      Our site uses cookies to improve performance. You may
                      disable cookies via browser settings.
                    </p>

                    <h3>Policy Updates</h3>
                    <p>
                      We may update this policy periodically. The latest version
                      will be available on our website.
                    </p>

                    <h3>Contact Information</h3>
                    <p>
                      African Joy Dairy Ltd, Olkeryan, Arusha, Tanzania |{" "}
                      <a
                        className='text-emerald-700 underline'
                        href='mailto:info@africanjoy.co.tz'>
                        info@africanjoy.co.tz
                      </a>{" "}
                      +255 745 330 042/784 240 780
                    </p>
                  </article>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key='terms'
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
                className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  <div className='col-span-2'>
                    <h2 className='text-2xl font-semibold text-slate-900'>
                      Terms of Service
                    </h2>
                    <p className='mt-2 text-sm text-slate-600'>
                      Effective Date: October 2025
                    </p>
                  </div>
                  <div className='hidden md:block text-sm text-slate-500'>
                    <div
                      className='rounded-lg p-3'
                      style={{
                        background: "#f6fff6",
                        border: `1px solid ${primary}22`,
                      }}>
                      <p className='text-xs font-medium text-slate-700'>
                        Quick facts
                      </p>
                      <p className='mt-1 text-xs text-slate-600'>
                        Orders in TZS • Delivery in Arusha • Returns within 24
                        hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className='h-[60vh] overflow-auto rounded-lg border border-slate-100 p-6 bg-white'>
                  <article className='prose prose-sm max-w-none text-slate-700'>
                    <h3>Introduction</h3>
                    <p>
                      By using our website or purchasing our products, you agree
                      to these Terms of Service. These terms govern your use of
                      African Joy Dairy Ltd’s services.
                    </p>

                    <h3>Company Overview</h3>
                    <p>
                      African Joy Dairy Ltd is a women-led dairy company
                      producing milk, yogurt, cheese, and cream sourced from
                      Tanzanian women farmers.
                    </p>

                    <h3>Use of Our Website</h3>
                    <p>
                      You agree to use our website lawfully and provide accurate
                      information. Misuse may result in account suspension.
                    </p>

                    <h3>Orders and Payments</h3>
                    <p>
                      All prices are in Tanzanian Shillings. Payments can be
                      made via Lipa Namba (M-Pesa) or Cash on Delivery.
                    </p>

                    <h3>Delivery Policy</h3>
                    <p>
                      Deliveries are available in Arusha. Fees vary by zone.
                      Orders above TZS 50,000 qualify for free delivery.
                    </p>

                    <h3>Returns and Refunds</h3>
                    <p>
                      Due to perishability, returns are accepted only for
                      damaged or incorrect items reported within 24 hours.
                    </p>

                    <h3>Bulk and Monthly Billing</h3>
                    <p>
                      African Joy offers bulk and monthly purchase options for
                      regular customers and retailers.
                    </p>

                    <h3>Intellectual Property</h3>
                    <p>
                      All brand materials are the property of African Joy Dairy
                      Ltd. Unauthorized use is prohibited.
                    </p>

                    <h3>Limitation of Liability</h3>
                    <p>
                      We are not liable for delivery delays, product misuse, or
                      external breaches beyond our control.
                    </p>

                    <h3>Governing Law</h3>
                    <p>
                      These Terms are governed by the laws of the United
                      Republic of Tanzania.
                    </p>

                    <h3>Updates to These Terms</h3>
                    <p>
                      We may update these Terms periodically. The latest version
                      will be posted on our website.
                    </p>

                    <h3>Contact Information</h3>
                    <p>
                      African Joy Dairy Ltd, Olkeryan, Arusha, Tanzania |{" "}
                      <a
                        className='text-emerald-700 underline'
                        href='mailto:info@africanjoy.co.tz'>
                        info@africanjoy.co.tz
                      </a>{" "}
                      | +255 745 330 042/784 240 780
                    </p>
                  </article>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
