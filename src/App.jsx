import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Welcome to Light UI
          </h1>
          <p className="text-gray-600 leading-relaxed">
            This is a beautiful, light-themed interface with smooth animations and modern design elements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-md p-6 transition-shadow hover:shadow-lg"
          >
            <div className="h-12 w-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-blue-600 text-xl">✨</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Beautiful Design</h2>
            <p className="text-gray-600">Clean and modern interface with attention to detail.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-md p-6 transition-shadow hover:shadow-lg"
          >
            <div className="h-12 w-12 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-purple-600 text-xl">🚀</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Smooth Animations</h2>
            <p className="text-gray-600">Delightful interactions and transitions throughout.</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 bg-white rounded-xl shadow-md p-6"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-10 w-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"></div>
            <div>
              <h3 className="font-semibold text-gray-800">Enhanced Experience</h3>
              <p className="text-sm text-gray-500">With modern features</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-600">Light and clean interface elements</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-600">Smooth transitions and animations</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-600">Responsive and accessible design</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;