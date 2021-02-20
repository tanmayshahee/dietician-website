export const getOtpCode = async ({ service, phone }) => {
  const response = await fetch(
    `https://api.ringcaptcha.com/ilijo2a4ibu1i6y3e9ef/code/${service}
    `,
    { mode: 'no-cors' },
    {
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        app_key: 'ilijo2a4ibu1i6y3e9ef',
        api_key: 'e45a7d020eb6f4c1c83073fd860c8ac35ac659d3',
        phone,
        service,
        locale: 'en (US English)',
      }),
    }
  );
  console.log(response);
  return response.json();
};
