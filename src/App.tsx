import { useState, useEffect } from 'react'
import { Moon, Sun, Key, DollarSign, Shield, CheckCircle, ExternalLink, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [copiedSteps, setCopiedSteps] = useState<{[key: string]: boolean}>({})

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const copyToClipboard = (text: string, stepId: string) => {
    navigator.clipboard.writeText(text)
    setCopiedSteps({...copiedSteps, [stepId]: true})
    setTimeout(() => {
      setCopiedSteps({...copiedSteps, [stepId]: false})
    }, 2000)
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <Key className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              OpenAI API Setup Guide
            </h1>
          </div>
          <Button
            onClick={toggleDarkMode}
            variant="outline"
            size="sm"
            className="p-2"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get Started with OpenAI API
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Follow our step-by-step guide to set up your OpenAI API key and configure a $5 spending limit for safe experimentation.
          </p>
        </div>

        {/* AI Introduction Section */}
        <Card className="mb-12 shadow-lg border-0 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/20 dark:to-cyan-900/20 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center space-x-2 text-2xl">
              <div className="p-2 bg-white/20 rounded-lg">
                <Key className="w-6 h-6" />
              </div>
              <span>Understanding AI: How Computers Think</span>
            </CardTitle>
            <CardDescription className="text-indigo-100 text-lg">
              A beginner-friendly introduction to how AI works with words and images
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-8">
              {/* Words to Numbers */}
              <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">1</div>
                  How AI Understands Words
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    Imagine you're trying to explain the word "cat" to a computer. Computers don't understand words like we do - they only understand numbers! 
                    So scientists created clever ways to turn words into numbers that capture their meaning.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg p-4 border-l-4 border-blue-500">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🎯 Stanford's GloVe (Global Vectors)</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Think of it like a giant dictionary where each word gets a unique "address" made of numbers. 
                      Words with similar meanings get similar number addresses. So "cat" and "kitten" would have very similar number patterns!
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🚀 Google's Word2Vec</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      This is like teaching a computer to play a word guessing game. It learns that words appearing together often are related. 
                      After millions of examples, it can even do word math: "King" - "Man" + "Woman" = "Queen"!
                    </p>
                  </div>

                  <div className="flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Example: Word "Cat" becomes</p>
                      <div className="font-mono text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded border">
                        [0.2, -0.1, 0.8, 0.3, -0.5, ...]
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">A list of numbers that represents "cat"</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Images to Numbers */}
              <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">2</div>
                  How AI "Sees" Images
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    When you look at a photo, you see objects, colors, and scenes. But computers see something completely different - 
                    they see millions of tiny colored dots called pixels, and each pixel is just a set of numbers!
                  </p>

                  <div className="bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 rounded-lg p-4 border-l-4 border-pink-500">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🎨 Color Codes as Numbers</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Every color you see is made from mixing Red, Green, and Blue light (RGB). Each color gets three numbers from 0 to 255:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-red-500 rounded"></div>
                        <span className="font-mono text-sm">Red: [255, 0, 0]</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-green-500 rounded"></div>
                        <span className="font-mono text-sm">Green: [0, 255, 0]</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-500 rounded"></div>
                        <span className="font-mono text-sm">Blue: [0, 0, 255]</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg p-4 border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">📱 From Picture to Number Grid</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      A simple 3×3 pixel image becomes a grid of numbers. Each pixel has 3 numbers (Red, Green, Blue), 
                      so a tiny 3×3 image becomes 27 numbers that the computer can understand and process!
                    </p>
                  </div>

                  <div className="flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">A simple 2×2 image becomes</p>
                      <div className="font-mono text-sm bg-white dark:bg-gray-800 px-4 py-2 rounded border">
                        [[255,0,0], [0,255,0]]<br/>
                        [[0,0,255], [255,255,0]]
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Red, Green, Blue, Yellow pixels as numbers</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why This Matters */}
              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">💡</div>
                  Why This Matters for OpenAI
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  When you use OpenAI's API, you're sending text (words) to their AI models. The AI converts your words into numbers, 
                  processes them using complex math, and converts the result back into words you can understand. 
                  It's like having a super-smart translator that speaks both human language and computer language!
                </p>
                <div className="mt-4 p-4 bg-white/70 dark:bg-gray-800/70 rounded-lg border-l-4 border-emerald-500">
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    🎯 <strong>Fun Fact:</strong> ChatGPT processes your message by converting it into thousands of numbers, 
                    doing billions of calculations, and then converting the result back into the text response you see!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notice */}
        <Alert className="mb-8 border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800">
          <Shield className="h-4 w-4 text-amber-600" />
          <AlertDescription className="text-amber-800 dark:text-amber-200">
            <strong>Important:</strong> Setting up spending limits is crucial to avoid unexpected charges. We'll show you how to set a $5 monthly limit.
          </AlertDescription>
        </Alert>

        {/* Step 1: Create Account */}
        <Card className="mb-8 shadow-lg border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <span>Create Your OpenAI Account</span>
            </CardTitle>
            <CardDescription className="text-blue-100">
              Sign up for a new OpenAI account or log into your existing one
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Visit the OpenAI Platform</p>
                  <p className="text-gray-600 dark:text-gray-300">Go to the official OpenAI platform website</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => window.open('https://platform.openai.com', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open OpenAI Platform
                  </Button>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Sign Up or Log In</p>
                  <p className="text-gray-600 dark:text-gray-300">Create a new account or use your existing credentials</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 2: Generate API Key */}
        <Card className="mb-8 shadow-lg border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <span>Generate Your API Key</span>
            </CardTitle>
            <CardDescription className="text-purple-100">
              Create a new API key for your applications
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Navigate to API Keys</p>
                  <p className="text-gray-600 dark:text-gray-300">In your dashboard, go to "API Keys" section</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => window.open('https://platform.openai.com/api-keys', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Go to API Keys
                  </Button>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Create New Secret Key</p>
                  <p className="text-gray-600 dark:text-gray-300">Click "Create new secret key" and give it a descriptive name</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Copy and Store Safely</p>
                  <p className="text-gray-600 dark:text-gray-300">Copy the key immediately - you won't be able to see it again!</p>
                  <Alert className="mt-2 border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800">
                    <AlertDescription className="text-red-800 dark:text-red-200">
                      <strong>Warning:</strong> Never share your API key publicly or commit it to version control.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 3: Set Spending Limit */}
        <Card className="mb-8 shadow-lg border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <span>Set $5 Spending Limit</span>
              <DollarSign className="w-5 h-5" />
            </CardTitle>
            <CardDescription className="text-green-100">
              Protect yourself from unexpected charges by setting a monthly limit
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Go to Billing Settings</p>
                  <p className="text-gray-600 dark:text-gray-300">Navigate to "Settings" → "Billing" in your dashboard</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => window.open('https://platform.openai.com/settings/organization/billing/overview', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open Billing Settings
                  </Button>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Set Usage Limits</p>
                  <p className="text-gray-600 dark:text-gray-300">Look for "Usage limits" or "Spending limits" section</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Configure Monthly Limit</p>
                  <p className="text-gray-600 dark:text-gray-300">Set your monthly spending limit to $5.00</p>
                  <div className="mt-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg font-mono text-sm flex items-center justify-between">
                    <span className="text-gray-800 dark:text-gray-200">Monthly limit: $5.00</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard('5.00', 'limit')}
                    >
                      {copiedSteps['limit'] ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Enable Notifications</p>
                  <p className="text-gray-600 dark:text-gray-300">Set up email alerts when you reach 80% and 100% of your limit</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 4: Using Your API Key */}
        <Card className="mb-8 shadow-lg border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <span>Using Your API Key</span>
            </CardTitle>
            <CardDescription className="text-pink-100">
              Best practices for implementing your API key in applications
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Environment Variables</p>
                  <p className="text-gray-600 dark:text-gray-300">Store your API key in environment variables, never in your code</p>
                  <div className="mt-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg font-mono text-sm flex items-center justify-between">
                    <span className="text-gray-800 dark:text-gray-200">OPENAI_API_KEY=your_api_key_here</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard('OPENAI_API_KEY=your_api_key_here', 'env')}
                    >
                      {copiedSteps['env'] ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Test Your Setup</p>
                  <p className="text-gray-600 dark:text-gray-300">Make a simple API call to verify everything works</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => window.open('https://platform.openai.com/docs/quickstart', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Quickstart Guide
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Resources */}
        <Card className="shadow-lg border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">Additional Resources</CardTitle>
            <CardDescription>Helpful links and documentation</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="h-auto p-4 justify-start"
                onClick={() => window.open('https://platform.openai.com/docs', '_blank')}
              >
                <div className="text-left">
                  <div className="font-medium">API Documentation</div>
                  <div className="text-sm text-gray-500">Complete API reference and guides</div>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </Button>
              <Button
                variant="outline"
                className="h-auto p-4 justify-start"
                onClick={() => window.open('https://platform.openai.com/docs/guides/rate-limits', '_blank')}
              >
                <div className="text-left">
                  <div className="font-medium">Rate Limits</div>
                  <div className="text-sm text-gray-500">Understanding API usage limits</div>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </Button>
              <Button
                variant="outline"
                className="h-auto p-4 justify-start"
                onClick={() => window.open('https://platform.openai.com/docs/guides/safety-best-practices', '_blank')}
              >
                <div className="text-left">
                  <div className="font-medium">Safety Best Practices</div>
                  <div className="text-sm text-gray-500">Guidelines for responsible AI usage</div>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </Button>
              <Button
                variant="outline"
                className="h-auto p-4 justify-start"
                onClick={() => window.open('https://help.openai.com', '_blank')}
              >
                <div className="text-left">
                  <div className="font-medium">Help Center</div>
                  <div className="text-sm text-gray-500">Support and troubleshooting</div>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="mt-12 sm:mt-16 bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6 sm:p-8">
        <div className="text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Connect with Raimon</h3>
          <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 icons social-grid">
            <li>
              <a href="https://x.com/raimonvibe/" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-110">
                <i className="fab fa-x-twitter text-base sm:text-lg"></i>
                <span className="sr-only">X</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos/" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-110">
                <i className="fab fa-youtube text-base sm:text-lg"></i>
                <span className="sr-only">YouTube</span>
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@raimonvibe/" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-800 to-black rounded-lg flex items-center justify-center text-white hover:from-gray-700 hover:to-gray-900 transition-all duration-300 hover:scale-110">
                <i className="fab fa-tiktok text-base sm:text-lg"></i>
                <span className="sr-only">TikTok</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/raimonvibe/" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-110">
                <i className="fab fa-instagram text-base sm:text-lg"></i>
                <span className="sr-only">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://medium.com/@raimonvibe/" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-white hover:from-gray-600 hover:to-gray-700 transition-all duration-300 hover:scale-110">
                <i className="fab fa-medium text-base sm:text-lg"></i>
                <span className="sr-only">Medium</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/raimonvibe/" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center text-white hover:from-gray-500 hover:to-gray-600 transition-all duration-300 hover:scale-110">
                <i className="fab fa-github text-base sm:text-lg"></i>
                <span className="sr-only">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/raimonvibe/" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-110">
                <i className="fab fa-linkedin-in text-base sm:text-lg"></i>
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61563450007849" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-110">
                <i className="fab fa-facebook-f text-base sm:text-lg"></i>
                <span className="sr-only">Facebook</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default App
