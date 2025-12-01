"use client";
import React, { useState, useEffect } from 'react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay to ensure smooth animation
      setTimeout(() => setShowBanner(true), 500);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
      } catch (error) {
        console.error('Error parsing cookie preferences:', error);
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);

    // Here you would typically initialize analytics/marketing scripts based on preferences
    if (prefs.analytics) {
      // Initialize analytics (e.g., Google Analytics)
      console.log('Analytics enabled');
    }
    if (prefs.marketing) {
      // Initialize marketing cookies
      console.log('Marketing cookies enabled');
    }
  };

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const acceptNecessary = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Can't disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) {
    return null;
  }

  return (
    <>
      {/* Main Cookie Banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-coffee-brown shadow-lg z-50 animate-slide-up">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1 text-coffee-brown">
                <h3 className="text-lg font-semibold mb-2">Cookie Consent</h3>
                <p className="text-sm md:text-base">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                  By clicking "Accept All", you consent to our use of cookies. You can customize your preferences by clicking "Cookie Settings".
                  {' '}
                  <a href="/privacy-policy" className="underline hover:text-coffee-dark">
                    Privacy Policy
                  </a>
                  {' '}|{' '}
                  <a href="/cookie-policy" className="underline hover:text-coffee-dark">
                    Cookie Policy
                  </a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 flex-shrink-0">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-2 border border-coffee-brown text-coffee-brown rounded-md hover:bg-coffee-light transition-colors text-sm md:text-base whitespace-nowrap"
                >
                  Cookie Settings
                </button>
                <button
                  onClick={acceptNecessary}
                  className="px-4 py-2 border border-coffee-brown text-coffee-brown rounded-md hover:bg-coffee-light transition-colors text-sm md:text-base whitespace-nowrap"
                >
                  Necessary Only
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2 bg-coffee-brown text-white rounded-md hover:bg-coffee-dark transition-colors text-sm md:text-base whitespace-nowrap"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-coffee-brown mb-4">Cookie Preferences</h2>
              <p className="text-gray-700 mb-6">
                We use cookies to improve your experience on our website. You can choose which types of cookies to allow.
                Please note that necessary cookies are required for the website to function properly.
              </p>

              {/* Necessary Cookies */}
              <div className="mb-6 border-b pb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-coffee-brown">Necessary Cookies</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      These cookies are essential for the website to function properly. They enable basic features like page navigation
                      and access to secure areas. The website cannot function properly without these cookies.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="w-5 h-5 text-coffee-brown cursor-not-allowed opacity-50"
                    />
                  </div>
                </div>
                <span className="text-xs text-gray-500">Always Active</span>
              </div>

              {/* Analytics Cookies */}
              <div className="mb-6 border-b pb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-coffee-brown">Analytics Cookies</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      These cookies help us understand how visitors interact with our website by collecting and reporting
                      information anonymously. This helps us improve our website and services.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => togglePreference('analytics')}
                      className="w-5 h-5 text-coffee-brown cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="mb-6 pb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-coffee-brown">Marketing Cookies</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      These cookies are used to track visitors across websites. The intention is to display ads that are
                      relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => togglePreference('marketing')}
                      className="w-5 h-5 text-coffee-brown cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 justify-end pt-4 border-t">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm md:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={acceptNecessary}
                  className="px-6 py-2 border border-coffee-brown text-coffee-brown rounded-md hover:bg-coffee-light transition-colors text-sm md:text-base"
                >
                  Necessary Only
                </button>
                <button
                  onClick={saveCustomPreferences}
                  className="px-6 py-2 bg-coffee-brown text-white rounded-md hover:bg-coffee-dark transition-colors text-sm md:text-base"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
