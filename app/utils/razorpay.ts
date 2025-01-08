declare global {
  interface Window {
    Razorpay: any;
  }
}

export const loadRazorpayScript = (): Promise<void> => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
};

export const initializeRazorpayCheckout = async (options: any): Promise<void> => {
  await loadRazorpayScript();
  const rzp = new window.Razorpay(options);
  rzp.open();
};

