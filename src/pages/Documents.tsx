import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, Eye, X, Calendar, FileType } from "lucide-react";
import { useState } from "react";

const Documents = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const documents = [
    {
      id: 1,
      title: "Annual Impact Report 2024",
      description:
        "Comprehensive overview of our social and environmental impact",
      category: "Impact Reports",
      date: "December 2024",
      pages: 45,
      size: "2.5 MB",
      thumbnail:
        "https://images.unsplash.com/photo-1554224311-beee2ece89d2?w=400&h=500&fit=crop",
      color: "#609F4D",
      pdfUrl: "#",
    },
    {
      id: 2,
      title: "Sustainability Practices Guide",
      description: "Our approach to eco-friendly dairy farming",
      category: "Sustainability",
      date: "November 2024",
      pages: 28,
      size: "1.8 MB",
      thumbnail:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=500&fit=crop",
      color: "#2C5F2D",
      pdfUrl: "#",
    },
    {
      id: 3,
      title: "Women Empowerment Program",
      description: "Training curriculum and success stories",
      category: "Programs",
      date: "October 2024",
      pages: 35,
      size: "3.1 MB",
      thumbnail:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=500&fit=crop",
      color: "#E8252B",
      pdfUrl: "#",
    },
    {
      id: 4,
      title: "Quality Assurance Standards",
      description: "Our commitment to premium dairy products",
      category: "Quality Control",
      date: "September 2024",
      pages: 22,
      size: "1.5 MB",
      thumbnail:
        "https://images.unsplash.com/photo-1568667256549-094345857637?w=400&h=500&fit=crop",
      color: "#FDB913",
      pdfUrl: "#",
    },
    {
      id: 5,
      title: "Financial Transparency Report",
      description: "Audited financial statements and fund allocation",
      category: "Finance",
      date: "August 2024",
      pages: 52,
      size: "4.2 MB",
      thumbnail:
        "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=500&fit=crop",
      color: "#97233F",
      pdfUrl: "#",
    },
    {
      id: 6,
      title: "Community Development Initiatives",
      description: "Infrastructure and education projects",
      category: "Community",
      date: "July 2024",
      pages: 31,
      size: "2.9 MB",
      thumbnail:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=500&fit=crop",
      color: "#609F4D",
      pdfUrl: "#",
    },
    {
      id: 7,
      title: "Partnership Opportunities",
      description: "How to collaborate with African Joy",
      category: "Partnerships",
      date: "June 2024",
      pages: 18,
      size: "1.2 MB",
      thumbnail:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=400&h=500&fit=crop",
      color: "#2C5F2D",
      pdfUrl: "#",
    },
    {
      id: 8,
      title: "Product Catalog 2024",
      description: "Complete range of dairy products and specifications",
      category: "Products",
      date: "May 2024",
      pages: 40,
      size: "5.8 MB",
      thumbnail:
        "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=500&fit=crop",
      color: "#E8252B",
      pdfUrl: "#",
    },
    {
      id: 9,
      title: "Farmer Training Manual",
      description: "Best practices in dairy farming",
      category: "Training",
      date: "April 2024",
      pages: 67,
      size: "3.7 MB",
      thumbnail:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=500&fit=crop",
      color: "#FDB913",
      pdfUrl: "#",
    },
  ];

  const categories = [...new Set(documents.map((doc) => doc.category))];
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredDocs =
    activeFilter === "All"
      ? documents
      : documents.filter((doc) => doc.category === activeFilter);

  return (
    <div className='min-h-screen bg-gradient-to-b from-white via-gray-50 to-white py-24'>
      <div className='container mx-auto px-6'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'>
          <h1
            className='text-5xl md:text-7xl font-black mb-6'
            style={{ color: "#609F4D" }}>
            Documents & Reports
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Access our official documents, reports, and educational materials
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex flex-wrap justify-center gap-3 mb-12'>
          <motion.button
            onClick={() => setActiveFilter("All")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${
              activeFilter === "All"
                ? "bg-[#609F4D] text-white shadow-lg"
                : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#609F4D]"
            }`}>
            All Documents
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${
                activeFilter === category
                  ? "bg-[#609F4D] text-white shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#609F4D]"
              }`}>
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Documents Grid */}
        <motion.div
          layout
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          <AnimatePresence>
            {filteredDocs.map((doc, idx) => (
              <motion.div
                key={doc.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -10 }}
                className='group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer'>
                {/* Document Preview */}
                <div className='relative h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200'>
                  <img
                    src={doc.thumbnail}
                    alt={doc.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  {/* Overlay */}
                  <div
                    className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity'
                    style={{
                      background: `linear-gradient(to top, ${doc.color}DD, transparent)`,
                    }}
                  />

                  {/* Category Badge */}
                  <div className='absolute top-4 right-4'>
                    <span
                      className='px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm'
                      style={{ backgroundColor: `${doc.color}CC` }}>
                      {doc.category}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className='absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedDoc(doc)}
                      className='flex-1 bg-white text-gray-900 px-4 py-2 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-100'>
                      <Eye className='w-4 h-4' />
                      Preview
                    </motion.button>
                    <motion.a
                      href={doc.pdfUrl}
                      download
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className='flex-1 bg-[#609F4D] text-white px-4 py-2 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#4d7f3d]'>
                      <Download className='w-4 h-4' />
                      Download
                    </motion.a>
                  </div>
                </div>

                {/* Document Info */}
                <div className='p-6'>
                  <h3 className='text-xl font-black text-gray-900 mb-2 group-hover:text-[#609F4D] transition-colors'>
                    {doc.title}
                  </h3>
                  <p className='text-gray-600 text-sm mb-4 line-clamp-2'>
                    {doc.description}
                  </p>

                  {/* Meta Info */}
                  <div className='flex items-center justify-between text-xs text-gray-500'>
                    <div className='flex items-center gap-4'>
                      <span className='flex items-center gap-1'>
                        <Calendar className='w-3 h-3' />
                        {doc.date}
                      </span>
                      <span className='flex items-center gap-1'>
                        <FileText className='w-3 h-3' />
                        {doc.pages} pages
                      </span>
                    </div>
                    <span className='font-bold'>{doc.size}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Document Preview Modal */}
      <AnimatePresence>
        {selectedDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDoc(null)}
            className='fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4'>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className='relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl'>
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedDoc(null)}
                className='absolute top-4 right-4 w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center z-10'>
                <X className='w-5 h-5' />
              </motion.button>

              {/* Document Preview Content */}
              <div className='p-8'>
                {/* Header */}
                <div className='flex items-start gap-6 mb-6'>
                  <div
                    className='w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0'
                    style={{ backgroundColor: `${selectedDoc.color}20` }}>
                    <FileText
                      className='w-8 h-8'
                      style={{ color: selectedDoc.color }}
                    />
                  </div>
                  <div className='flex-1'>
                    <h2 className='text-3xl font-black text-gray-900 mb-2'>
                      {selectedDoc.title}
                    </h2>
                    <p className='text-gray-600 mb-4'>
                      {selectedDoc.description}
                    </p>
                    <div className='flex items-center gap-6 text-sm text-gray-500'>
                      <span className='flex items-center gap-2'>
                        <Calendar className='w-4 h-4' />
                        {selectedDoc.date}
                      </span>
                      <span className='flex items-center gap-2'>
                        <FileText className='w-4 h-4' />
                        {selectedDoc.pages} pages
                      </span>
                      <span className='flex items-center gap-2'>
                        <FileType className='w-4 h-4' />
                        {selectedDoc.size}
                      </span>
                      <span
                        className='px-3 py-1 rounded-full text-xs font-bold text-white'
                        style={{ backgroundColor: selectedDoc.color }}>
                        {selectedDoc.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Document Preview Image */}
                <div className='relative rounded-2xl overflow-hidden mb-6 bg-gray-100'>
                  <img
                    src={selectedDoc.thumbnail}
                    alt={selectedDoc.title}
                    className='w-full h-96 object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-8'>
                    <p className='text-white text-center text-sm'>
                      Full document preview available after download
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className='flex gap-4'>
                  <motion.a
                    href={selectedDoc.pdfUrl}
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='flex-1 bg-[#609F4D] text-white px-6 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#4d7f3d] transition-colors'>
                    <Download className='w-5 h-5' />
                    Download PDF
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedDoc(null)}
                    className='px-6 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-bold text-lg hover:border-gray-400 transition-colors'>
                    Close
                  </motion.button>
                </div>

                {/* Additional Info */}
                <div className='mt-6 p-4 bg-gray-50 rounded-2xl'>
                  <p className='text-sm text-gray-600 text-center'>
                    📄 This document is available for free download. All our
                    reports and materials are open access to support
                    transparency and knowledge sharing.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Documents;
