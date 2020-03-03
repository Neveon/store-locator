const storeForm = document.getElementById('store-form');
const storeId = document.getElementById('store-id');
const storeAddress = document.getElementById('store-address');

// Send POST to API - Adding Store
async function addStore(e) {
  // prevent form refresh
  e.preventDefault();

  if(storeId.value === '' || storeAddress.value === '') {
    alert('Please fill in all fields');
    return;
  }

  const sendBody = {
    storeId: storeId.value,
    address: storeAddress.value
  }

  try {
    const res = await fetch('/api/v1/stores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendBody)
    });

    if(res.status === 400) {
      throw Error('Store already exists!');
    }

    alert('Store added!');
    window.location.href = '/index.html';

  } catch (err) {
    alert(err);
    return;
  }
}

storeForm.addEventListener('submit', addStore);