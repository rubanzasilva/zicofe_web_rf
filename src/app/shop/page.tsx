"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft, ShoppingCart, AlertCircle } from 'lucide-react';

const ShopPage = () => {
  // Form state
  const [unit, setUnit] = useState<'kg' | 'bags'>('kg');
  const [quantity, setQuantity] = useState<string>('');
  const [coffeeType, setCoffeeType] = useState<'arabica' | 'robusta' | ''>('');
  const [coffeeGrade, setCoffeeGrade] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  // Coffee grade options based on type
  const robustaGrades = [
    'Natural Uganda Screen 1800',
    'Natural Uganda Robusta Screen 1500',
    'Natural Uganda Robusta Screen 1200',
    'BHP 1199',
    'Black Beans',
    'Natural Uganda Robusta Screen 1700+',
    'Washed Uganda Robusta Screen 1500+'
  ];

  const arabicaGrades = [
    'AA',
    'AB',
    'CPB',
    'Wugar',
    'A',
    'Dry Processed Uganda Arabica'
  ];

  // Reset grade when coffee type changes
  useEffect(() => {
    setCoffeeGrade('');
  }, [coffeeType]);

  // Calculate conversion
  const getConversion = () => {
    const qty = parseFloat(quantity);
    if (isNaN(qty) || qty <= 0) return null;

    if (unit === 'kg') {
      const bags = (qty / 60).toFixed(2);
      return `≈ ${bags} bag${parseFloat(bags) !== 1 ? 's' : ''}`;
    } else {
      const kg = (qty * 60).toFixed(0);
      return `= ${kg} kilograms`;
    }
  };

  // Get total in both units for summary
  const getTotalKg = () => {
    const qty = parseFloat(quantity);
    if (isNaN(qty) || qty <= 0) return 0;
    return unit === 'kg' ? qty : qty * 60;
  };

  const getTotalBags = () => {
    const qty = parseFloat(quantity);
    if (isNaN(qty) || qty <= 0) return 0;
    return unit === 'bags' ? qty : qty / 60;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/api/send-order-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          unit,
          quantity,
          coffeeType,
          coffeeGrade,
          fullName,
          email,
          phone,
          company,
          address,
          notes,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage({
          type: 'success',
          text: 'Thank you! Your order request has been received. We will contact you shortly with a quote.'
        });

        // Reset form
        setUnit('kg');
        setQuantity('');
        setCoffeeType('');
        setCoffeeGrade('');
        setFullName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setAddress('');
        setNotes('');
      } else {
        setSubmitMessage({
          type: 'error',
          text: data.error || 'Failed to submit order. Please try again or contact us directly.'
        });
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      setSubmitMessage({
        type: 'error',
        text: 'An error occurred while submitting your order. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-12">
        <div className="container max-w-6xl">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center text-coffee-brown hover:text-coffee-dark mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-coffee-brown mb-4">
              Place Your Order
            </h1>
            <p className="text-xl text-coffee-brown max-w-2xl mx-auto">
              Fill in your coffee requirements and we'll get back to you with a quote
            </p>
          </div>

          {/* Form Container */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
                {/* FOT Terms Notice */}
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
                  <div className="flex items-start">
                    <AlertCircle className="text-amber-600 mt-0.5 mr-3 flex-shrink-0" size={20} />
                    <div className="text-sm text-amber-800">
                      <p className="font-semibold mb-1">FOT Terms Apply</p>
                      <p>
                        Coffee is sold under FOT (Free on Truck) terms. We issue an invoice after coffee
                        has been delivered to your forwarder. Documents for the coffee are shared after
                        payment is confirmed by Zigoti.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 1. Quantity Section */}
                <div className="mb-8">
                  <label className="block text-lg font-semibold text-coffee-brown mb-4">
                    Quantity <span className="text-red-500">*</span>
                  </label>

                  {/* Unit Selection */}
                  <div className="flex gap-6 mb-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        value="kg"
                        checked={unit === 'kg'}
                        onChange={(e) => setUnit(e.target.value as 'kg')}
                        className="w-4 h-4 text-coffee-brown focus:ring-coffee-brown"
                      />
                      <span className="ml-2 text-coffee-brown">Kilograms (KG)</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        value="bags"
                        checked={unit === 'bags'}
                        onChange={(e) => setUnit(e.target.value as 'bags')}
                        className="w-4 h-4 text-coffee-brown focus:ring-coffee-brown"
                      />
                      <span className="ml-2 text-coffee-brown">Bags (60 KG per bag)</span>
                    </label>
                  </div>

                  {/* Quantity Input */}
                  <div>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder={`Enter quantity in ${unit === 'kg' ? 'kilograms' : 'bags'}`}
                      min="1"
                      step="any"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-coffee-brown focus:outline-none text-coffee-brown"
                    />
                    {getConversion() && (
                      <p className="text-sm text-gray-600 mt-2">{getConversion()}</p>
                    )}
                  </div>
                </div>

                {/* 2. Coffee Type Section */}
                <div className="mb-8">
                  <label className="block text-lg font-semibold text-coffee-brown mb-4">
                    Coffee Type <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        value="arabica"
                        checked={coffeeType === 'arabica'}
                        onChange={(e) => setCoffeeType(e.target.value as 'arabica')}
                        required
                        className="w-4 h-4 text-coffee-brown focus:ring-coffee-brown"
                      />
                      <span className="ml-2 text-coffee-brown">Arabica</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        value="robusta"
                        checked={coffeeType === 'robusta'}
                        onChange={(e) => setCoffeeType(e.target.value as 'robusta')}
                        required
                        className="w-4 h-4 text-coffee-brown focus:ring-coffee-brown"
                      />
                      <span className="ml-2 text-coffee-brown">Robusta</span>
                    </label>
                  </div>
                </div>

                {/* 3. Coffee Grade Section */}
                {coffeeType && (
                  <div className="mb-8">
                    <label className="block text-lg font-semibold text-coffee-brown mb-4">
                      Coffee Grade <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={coffeeGrade}
                      onChange={(e) => setCoffeeGrade(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-coffee-brown focus:outline-none text-coffee-brown"
                    >
                      <option value="">Select a grade...</option>
                      {(coffeeType === 'robusta' ? robustaGrades : arabicaGrades).map((grade) => (
                        <option key={grade} value={grade}>
                          {grade}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* 4. Customer Details Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-coffee-brown mb-4 pb-2 border-b border-gray-200">
                    Customer Details
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-coffee-brown mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-coffee-brown focus:outline-none text-coffee-brown"
                      />
                    </div>

                    <div>
                      <label className="block text-coffee-brown mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-coffee-brown focus:outline-none text-coffee-brown"
                      />
                    </div>

                    <div>
                      <label className="block text-coffee-brown mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-coffee-brown focus:outline-none text-coffee-brown"
                      />
                    </div>

                    <div>
                      <label className="block text-coffee-brown mb-2">
                        Company Name <span className="text-gray-400">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-coffee-brown focus:outline-none text-coffee-brown"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-coffee-brown mb-2">
                      Delivery Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-coffee-brown focus:outline-none text-coffee-brown"
                    />
                  </div>
                </div>

                {/* 5. Additional Notes */}
                <div className="mb-8">
                  <label className="block text-lg font-semibold text-coffee-brown mb-4">
                    Additional Notes <span className="text-gray-400">(Optional)</span>
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                    placeholder="Any special requests or notes about your order..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-coffee-brown focus:outline-none text-coffee-brown"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-coffee-brown text-white px-8 py-4 rounded-md hover:bg-coffee-dark transition-colors font-semibold text-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={20} className="mr-2" />
                      Submit Order Request
                    </>
                  )}
                </button>

                {/* Success/Error Message */}
                {submitMessage && (
                  <div className={`mt-6 p-4 rounded-md ${
                    submitMessage.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {submitMessage.text}
                  </div>
                )}
              </form>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                <h3 className="text-xl font-bold text-coffee-brown mb-4 pb-3 border-b border-gray-200">
                  Order Summary
                </h3>

                {coffeeType || quantity ? (
                  <div className="space-y-3">
                    {coffeeType && (
                      <div>
                        <p className="text-sm text-gray-600">Coffee Type</p>
                        <p className="font-semibold text-coffee-brown capitalize">{coffeeType}</p>
                      </div>
                    )}

                    {coffeeGrade && (
                      <div>
                        <p className="text-sm text-gray-600">Grade</p>
                        <p className="font-semibold text-coffee-brown">{coffeeGrade}</p>
                      </div>
                    )}

                    {quantity && parseFloat(quantity) > 0 && (
                      <div>
                        <p className="text-sm text-gray-600">Quantity</p>
                        <p className="font-semibold text-coffee-brown">
                          {getTotalKg().toFixed(2)} KG
                        </p>
                        <p className="text-sm text-gray-600">
                          ({getTotalBags().toFixed(2)} bags)
                        </p>
                      </div>
                    )}

                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-2">Pricing</p>
                      <p className="text-coffee-brown">
                        Contact us for current pricing and availability
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Your order details will appear here
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShopPage;
