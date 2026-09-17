
// P&O Arvia Norwegian Fjords 2027 Data Model
const cruiseData = [
  {
    day: 0,
    date: 'Sun 28 Mar 2027',
    port: 'Southampton (Embarkation)',
    arrive: '12:00 PM Check-in',
    depart: '5:00 PM Sailing',
    highlight: 'Boarding the P&O Arvia!',
    lat: 50.897,
    lng: -1.404,
    heroImage: 'https://images.unsplash.com/photo-1599827552599-eadf5af3c6f2?auto=format&fit=crop&q=80&w=1000',
    weather: '10°C / Cloudy (Est)',
    activities: 'Explore the ship, check out the Altitude Skywalk, and enjoy the Sailaway party as we leave Southampton.',
    kids: 'Register for Splash Valley and The Reef kids clubs! Find the mini-golf course.',
  },
  {
    day: 1,
    date: 'Mon 29 Mar 2027',
    port: 'At Sea',
    arrive: '—',
    depart: '—',
    highlight: 'Cruising the North Sea',
    lat: 54.5,
    lng: 3.5,
    heroImage: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=1000',
    weather: '8°C / Windy (Est)',
    activities: 'Relax in the Oasis Spa, catch a show in the Headliners Theatre, or brave the outdoor pools if heated!',
    kids: 'Altitude Minigolf tournament and mastering the high ropes on the Skywalk.',
  },
  {
    day: 2,
    date: 'Tue 30 Mar 2027',
    port: 'Stavanger, Norway',
    arrive: '8:00 AM',
    depart: '5:00 PM',
    highlight: 'Lysefjord & Pulpit Rock Views',
    lat: 58.9699,
    lng: 5.7331,
    heroImage: 'https://images.unsplash.com/photo-1513515438885-9372f6a9e1e3?auto=format&fit=crop&q=80&w=1000',
    weather: '6°C / Showers (Est)',
    activities: 'Wander through Gamle Stavanger (Old Town) with its white wooden houses, or take a fjord cruise to see Preikestolen.',
    kids: 'Visit the Norwegian Petroleum Museum for interactive exhibits, or a thrilling RIB boat ride on the fjord!',
  },
  {
    day: 3,
    date: 'Wed 31 Mar 2027',
    port: 'Olden, Norway',
    arrive: '8:00 AM',
    depart: '5:00 PM',
    highlight: 'Briksdal Glacier',
    lat: 61.833,
    lng: 6.816,
    heroImage: 'https://images.unsplash.com/photo-1626248967015-188b430d4cdb?auto=format&fit=crop&q=80&w=1000',
    weather: '5°C / Crisp (Est)',
    activities: 'Hike or take the Troll car up to the magnificent Briksdal Glacier. Witness the deep blue ice and waterfalls.',
    kids: 'Riding the troll cars and spotting waterfalls. Excellent day for hot chocolate!',
  },
  {
    day: 4,
    date: 'Thu 01 Apr 2027',
    port: 'Ålesund / Hellesylt',
    arrive: '8:00 AM',
    depart: '5:00 PM',
    highlight: 'Art Nouveau Architecture & Seven Sisters Waterfall',
    lat: 62.472,
    lng: 6.154,
    heroImage: 'https://images.unsplash.com/photo-1601007421867-0c7f202298c9?auto=format&fit=crop&q=80&w=1000',
    weather: '6°C / Overcast (Est)',
    activities: 'Climb the 418 steps to the Mount Aksla viewpoint for a panoramic view of the islands and town.',
    kids: 'Atlanterhavsparken (Atlantic Sea-Park) aquarium to see penguins and massive fish!',
  },
  {
    day: 5,
    date: 'Fri 02 Apr 2027',
    port: 'Haugesund, Norway',
    arrive: '8:00 AM',
    depart: '5:00 PM',
    highlight: 'Homeland of the Viking Kings',
    lat: 59.413,
    lng: 5.268,
    heroImage: 'https://images.unsplash.com/photo-1518118014377-ce997e5967ee?auto=format&fit=crop&q=80&w=1000',
    weather: '7°C / Clear (Est)',
    activities: 'Visit the Haraldshaugen national monument. Dive into true Viking history at Avaldsnes.',
    kids: 'Viking Village at Avaldsnes – dress up and see how real Vikings lived!',
  },
  {
    day: 6,
    date: 'Sat 03 Apr 2027',
    port: 'At Sea',
    arrive: '—',
    depart: '—',
    highlight: 'Final Ship Day',
    lat: 55.0,
    lng: 2.0,
    heroImage: 'https://images.unsplash.com/photo-1579562095311-2eb26197ba75?auto=format&fit=crop&q=80&w=1000',
    weather: '9°C / Cloudy (Est)',
    activities: 'Final specialty dining, packing, and enjoying the Grand Atrium entertainment.',
    kids: 'Farewell party at The Reef, last chance at the Escape Room.',
  },
  {
    day: 7,
    date: 'Sun 04 Apr 2027',
    port: 'Southampton (Disembarkation)',
    arrive: '6:30 AM',
    depart: '—',
    highlight: 'Heading Home',
    lat: 50.897,
    lng: -1.404,
    heroImage: 'https://images.unsplash.com/photo-1605307068538-aa2376fc9981?auto=format&fit=crop&q=80&w=1000',
    weather: '11°C / Rain (Est)',
    activities: 'Breakfast, grab luggage, and drive/train back home.',
    kids: 'Saying goodbye to the Arvia and swapping photos.',
  }
];

// Packing List
const packingItems = [
  { id: 1, text: 'Passports & P&O Boarding Passes', done: false },
  { id: 2, text: 'Waterproof / Windproof Jackets (Crucial!)', done: false },
  { id: 3, text: 'Thermal Base Layers & Warm Sweaters', done: false },
  { id: 4, text: 'Sturdy Walking / Hiking Boots', done: false },
  { id: 5, text: 'Binoculars for Fjord viewing', done: false },
  { id: 6, text: 'Swimwear (For heated pools / Spa)', done: false },
  { id: 7, text: 'Evening wear (Formal nights)', done: false },
  { id: 8, text: 'UK Plugs / Chargers (Arvia has UK sockets)', done: false }
];

// Deck Plan Data (Sorted Numerically)
const deckPlans = [
  {
    deck: 'Deck 19',
    venues: ['Altitude Skywalk', 'Altitude Minigolf', 'Splash Valley']
  },
  {
    deck: 'Deck 18',
    venues: ['Skybar', 'Infinity Pool']
  },
  {
    deck: 'Deck 17',
    venues: ['The Epicurean', 'Sindhu', 'Oasis Spa']
  },
  {
    deck: 'Deck 16',
    venues: ['Skydome', 'The Quays', 'Horizon Restaurant']
  },
  {
    deck: 'Deck 11',
    venues: ['Al-Tahoor & Sarah Cabin (Placeholder: 11234)', 'Jonny & Emily Cabin (Placeholder: 11236)']
  },
  {
    deck: 'Deck 8',
    venues: ['Grand Atrium (Top)', 'The Keel & Cow', 'The Olive Grove', 'Ocean Studios']
  },
  {
    deck: 'Deck 7',
    venues: ['Grand Atrium (Mid)', 'Glass House', '710 Club', 'Headliners Theatre (Balcony)']
  },
  {
    deck: 'Deck 6',
    venues: ['Grand Atrium (Base)', '6th Street Diner', 'Anderson\'s Bar', 'Headliners Theatre (Stalls)']
  }
];

// App State
let selectedDayIndex = 0;
let activeLogisticsTab = 'greenfield';
let jonnyPantsUsed = parseInt(localStorage.getItem('jonny_pants') || '0');
const JONNY_PANTS_TOTAL = 14;

// Authentication
const VALID_PASSCODES = ['viking', 'fjords2027', 'arvia'];
let isAuthenticated = localStorage.getItem('arvia_auth') === 'true';

function initApp() {
  if (!isAuthenticated) {
    document.getElementById('splash-screen').classList.remove('hidden');
    document.getElementById('portal-content').classList.add('hidden');
  } else {
    document.getElementById('splash-screen').classList.add('hidden');
    document.getElementById('portal-content').classList.remove('hidden');
    renderDayList();
    selectDay(0);
    renderPackingList();
    startCountdown();
    updatePantsTracker();
    renderDeckPlan('');
  }
}

function unlockPortal() {
  const input = document.getElementById('passcode-input').value.toLowerCase().trim();
  if (VALID_PASSCODES.includes(input)) {
    localStorage.setItem('arvia_auth', 'true');
    isAuthenticated = true;
    document.getElementById('splash-error').classList.add('hidden');
    initApp();
  } else {
    document.getElementById('splash-error').classList.remove('hidden');
  }
}

function lockPortal() {
  localStorage.removeItem('arvia_auth');
  isAuthenticated = false;
  initApp();
}

function renderDayList() {
  const list = document.getElementById('day-list');
  list.innerHTML = cruiseData.map((day, idx) => `
    <div class="day-btn ${idx === selectedDayIndex ? 'active' : ''}" onclick="selectDay(${idx})">
      <div>
        <div class="day-title">${day.day === 0 ? 'Embark' : day.day === 7 ? 'Disembark' : 'Day ' + day.day}: ${day.port.split(',')[0]}</div>
        <div class="day-date">${day.date}</div>
      </div>
      <i class="fa-solid fa-chevron-right" style="font-size: 11px; opacity: 0.5;"></i>
    </div>
  `).join('');
}

function selectDay(idx) {
  selectedDayIndex = idx;
  renderDayList();
  
  const day = cruiseData[idx];
  const detailHtml = `
    <div class="hero-img-container">
      <img src="${day.heroImage}" alt="${day.port}">
      <div class="hero-overlay">
        <div class="hero-title">${day.port}</div>
        <div class="hero-subtitle">${day.date} &bull; Arrive: ${day.arrive} | Depart: ${day.depart}</div>
      </div>
    </div>
    
    <div class="card-body">
      <div class="weather-widget">
        <i class="fa-solid fa-wind weather-icon"></i>
        <div class="weather-info">
          <h3>Northern Conditions</h3>
          <p>${day.weather}</p>
        </div>
      </div>
      
      <p style="font-size: 16px; font-weight: 600; margin-bottom: 15px; color: var(--viking-gold);">
        <i class="fa-brands fa-d-and-d"></i> Highlight: ${day.highlight}
      </p>
      
      <div class="detail-grid">
        <div class="detail-box">
          <h3><i class="fa-solid fa-shield-halved"></i> Clan Activities</h3>
          <p>${day.activities}</p>
        </div>
        <div class="detail-box" style="border-color: var(--accent);">
          <h3 style="color: var(--accent);"><i class="fa-solid fa-khanda"></i> Youth Viking Squad</h3>
          <p>${day.kids}</p>
        </div>
      </div>
    </div>
  `;
  document.getElementById('day-details-card').innerHTML = detailHtml;

  // Move the ship
  if (window.gmap && window.shipMarker) {
    const endPos = new google.maps.LatLng(day.lat, day.lng);
    gmap.panTo(endPos);
    window.shipMarker.setPosition(endPos);
  }
}

function switchLogistics(tab) {
  activeLogisticsTab = tab;
  document.getElementById('tab-greenfield').classList.toggle('active', tab === 'greenfield');
  document.getElementById('tab-cardiff').classList.toggle('active', tab === 'cardiff');
  
  const content = document.getElementById('logistics-content');
  if (tab === 'greenfield') {
    content.innerHTML = `
      <h3 style="color: var(--primary); margin-bottom: 5px;">Greenfield to Southampton (Al-Tahoor, Sarah, Jacob, Ellie)</h3>
      <p>Distance: ~220 miles (approx 4 hours driving)</p>
      <ul>
        <li><strong>Drive:</strong> Leave early morning. Take M62, M60, M56, M6, M40, A34. Book port parking (CPS Parking) in advance.</li>
        <li><strong>Train:</strong> Greenfield -> Manchester Piccadilly -> CrossCountry to Reading -> Train to Southampton Central. (~5 hours). Taxi to Ocean Terminal.</li>
      </ul>
    `;
  } else {
    content.innerHTML = `
      <h3 style="color: var(--accent); margin-bottom: 5px;">Cardiff to Southampton (Jonny, Emily, Ezra, Maya)</h3>
      <p>Distance: ~135 miles (approx 2.5 hours driving)</p>
      <ul>
        <li><strong>Drive:</strong> Take M4 East to A34 South. Easiest route, book CPS port parking in advance.</li>
        <li><strong>Train:</strong> Direct GWR train from Cardiff Central to Southampton Central (~2.5 hours). Short taxi to terminal.</li>
      </ul>
    `;
  }
}

function renderPackingList() {
  const container = document.getElementById('packing-items');
  container.innerHTML = packingItems.map(item => `
    <div class="packing-item ${item.done ? 'done' : ''}" onclick="togglePacking(${item.id})">
      <i class="fa-regular ${item.done ? 'fa-square-check' : 'fa-square'}"></i>
      ${item.text}
    </div>
  `).join('');
}

function togglePacking(id) {
  const item = packingItems.find(i => i.id === id);
  if (item) {
    item.done = !item.done;
    renderPackingList();
  }
}

function startCountdown() {
  const embarkDate = new Date('March 28, 2027 12:00:00').getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const diff = embarkDate - now;
    if (diff < 0) return;
    document.getElementById('days').innerText = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
    document.getElementById('hours').innerText = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    document.getElementById('mins').innerText = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    document.getElementById('secs').innerText = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
  }, 1000);
}

function incrementPants() {
  if (jonnyPantsUsed < JONNY_PANTS_TOTAL) {
    jonnyPantsUsed++;
    localStorage.setItem('jonny_pants', jonnyPantsUsed);
    updatePantsTracker();
  }
}
function resetPants() {
  jonnyPantsUsed = 0;
  localStorage.setItem('jonny_pants', jonnyPantsUsed);
  updatePantsTracker();
}
function updatePantsTracker() {
  document.getElementById('pants-used').innerText = jonnyPantsUsed;
  document.getElementById('pants-total').innerText = JONNY_PANTS_TOTAL;
  const progress = (jonnyPantsUsed / JONNY_PANTS_TOTAL) * 100;
  document.getElementById('pants-bar').style.width = `${progress}%`;
  if (jonnyPantsUsed >= JONNY_PANTS_TOTAL) {
    document.getElementById('pants-bar').style.backgroundColor = 'var(--danger)';
  } else {
    document.getElementById('pants-bar').style.backgroundColor = 'var(--accent)';
  }
}

function renderDeckPlan(filterText = '') {
  const container = document.getElementById('deck-plan-container');
  const lowerFilter = filterText.toLowerCase();
  
  let html = '';
  deckPlans.forEach(deck => {
    const filteredVenues = deck.venues.filter(v => v.toLowerCase().includes(lowerFilter));
    if (filteredVenues.length > 0 || deck.deck.toLowerCase().includes(lowerFilter)) {
      html += `
        <div class="deck-row">
          <div class="deck-number">${deck.deck}</div>
          <div class="deck-venues">
            ${deck.venues.map(v => {
              const matches = v.toLowerCase().includes(lowerFilter);
              if (filterText && !matches) return '';
              const isCabin = v.includes('Cabin');
              return `<span class="deck-venue ${isCabin ? 'venue-cabin' : ''}">${v}</span>`;
            }).join('')}
          </div>
        </div>
      `;
    }
  });
  
  if (html === '') html = '<p style="color:var(--text-muted); padding: 10px;">No venues found matching your search.</p>';
  container.innerHTML = html;
}

document.getElementById('deck-search')?.addEventListener('input', (e) => {
  renderDeckPlan(e.target.value);
});

// --- Map Logic ---
window.initMap = function() {
  const ph = document.getElementById('map-placeholder');
  if (ph) ph.style.display = 'none';
  
  const initialData = cruiseData[selectedDayIndex];
  
  // Custom Map Styling
  window.gmap = new google.maps.Map(document.getElementById('map-container'), {
    center: { lat: 58.0, lng: 2.0 }, // Centered between UK and Norway
    zoom: 4.8, // Zoomed out to show the journey
    disableDefaultUI: false,
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#112236' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#1a365d' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#94a3b8' }] },
      { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0b1320' }] },
      { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#2a4b7c' }] }
    ]
  });

  // Custom Viking Longboat / Ship SVG
  const vikingShipIcon = {
    url: 'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="%23d4af37"><path d="M632 320c-17.7 0-32-14.3-32-32V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v176c0 17.7-14.3 32-32 32s-32-14.3-32-32V112c0-17.7-14.3-32-32-32s-32 14.3-32 32v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v160c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 17.7-14.3 32-32 32s-32-14.3-32-32V176c0-17.7-14.3-32-32-32S0 158.3 0 176v112c0 17.7 14.3 32 32 32h16.5c10.4 46.1 48 83.7 94.1 94.1H497.4c46.1-10.4 83.7-48 94.1-94.1H608c17.7 0 32-14.3 32-32zM128 352H512c26.5 0 48-21.5 48-48V256H80v48c0 26.5 21.5 48 48 48z"/></svg>',
    scaledSize: new google.maps.Size(40, 40),
    anchor: new google.maps.Point(20, 20)
  };

  window.shipMarker = new google.maps.Marker({
    position: { lat: initialData.lat, lng: initialData.lng },
    map: window.gmap,
    icon: vikingShipIcon,
    title: 'P&O Arvia',
    zIndex: 100
  });

  // Coastal / Fjord Route Waypoints (Avoiding straight lines over land)
  const realisticRoute = [
    {lat: 50.897, lng: -1.404}, // Southampton
    {lat: 50.6, lng: 0.1},      // English Channel
    {lat: 51.5, lng: 2.0},      // North Sea South
    {lat: 54.5, lng: 3.5},      // North Sea Mid (At Sea day)
    {lat: 57.5, lng: 4.5},      // North Sea North
    {lat: 58.9699, lng: 5.7331},// Stavanger
    {lat: 59.3, lng: 4.8},      // Coastal turning point
    {lat: 61.2, lng: 4.5},      // Coastal turning point 2
    {lat: 61.85, lng: 5.1},     // Entering Nordfjord
    {lat: 61.833, lng: 6.816},  // Olden
    {lat: 61.85, lng: 5.1},     // Exiting Nordfjord
    {lat: 62.3, lng: 5.0},      // Coastal turning point 3
    {lat: 62.472, lng: 6.154},  // Ålesund / Hellesylt
    {lat: 62.3, lng: 5.0},      // Coastal turning point 3
    {lat: 59.413, lng: 5.268},  // Haugesund
    {lat: 55.0, lng: 2.0},      // At Sea Southbound
    {lat: 51.5, lng: 2.0},      
    {lat: 50.6, lng: 0.1},      
    {lat: 50.897, lng: -1.404}, // Southampton
  ];

  const routePath = new google.maps.Polyline({
    path: realisticRoute,
    geodesic: true,
    strokeColor: '#d4af37', // Viking Gold
    strokeOpacity: 0.6,
    strokeWeight: 2,
    strokeDasharray: '4 4'
  });
  routePath.setMap(window.gmap);

  cruiseData.forEach((d) => {
    if (d.port !== 'At Sea') {
      new google.maps.Marker({
        position: { lat: d.lat, lng: d.lng },
        map: window.gmap,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 5,
          fillColor: '#38bdf8',
          fillOpacity: 1,
          strokeColor: '#0b1320',
          strokeWeight: 2
        },
        title: d.port
      });
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initApp();
  switchLogistics('greenfield');
});
