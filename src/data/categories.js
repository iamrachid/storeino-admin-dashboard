const categories =  [
  {
    "parents": [],
    "children": [
      {
        "slug": "fashion:women-fashion",
        "name": "Women Fashion"
      },
      {
        "slug": "fashion:men-fashion",
        "name": "Men Fashion"
      },
      {
        "slug": "fashion:kids-fashion",
        "name": "Kids Fashion"
      }
    ],
    "_id": "6269399c6370d44bb86102eb",
    "name": "Fashion",
    "slug": "fashion",
    "level": 0
  },
  {
    "parents": [
      {
        "name": "Fashion",
        "slug": "fashion"
      }
    ],
    "children": [
      {
        "slug": "fashion:women-fashion:bottoms",
        "name": "Bottoms"
      },
      {
        "slug": "fashion:women-fashion:outerwears-and-jackets",
        "name": "Outerwears and Jackets"
      },
      {
        "slug": "fashion:women-fashion:accessories",
        "name": "Accessories"
      },
      {
        "slug": "fashion:women-fashion:underwears",
        "name": "Underwears"
      },
      {
        "slug": "fashion:women-fashion:shoes",
        "name": "Shoes"
      }
    ],
    "_id": "6269399d6370d44bb86102ef",
    "name": "Women Fashion",
    "slug": "fashion:women-fashion",
    "level": 1
  },
  {
    "parents": [
      {
        "name": "Fashion",
        "slug": "fashion"
      }
    ],
    "children": [
      {
        "slug": "fashion:men-fashion:bottoms",
        "name": "Bottoms"
      },
      {
        "slug": "fashion:men-fashion:shoes",
        "name": "Shoes"
      },
      {
        "slug": "fashion:men-fashion:underwears",
        "name": "Underwears"
      },
      {
        "slug": "fashion:men-fashion:accessories",
        "name": "Accessories"
      },
      {
        "slug": "fashion:men-fashion:outerwears-and-jackets",
        "name": "Outerwears and Jackets"
      },
      {
        "slug": "fashion:men-fashion:t-shirts",
        "name": "T-shirts"
      }
    ],
    "_id": "6269399d6370d44bb86102f2",
    "name": "Men Fashion",
    "slug": "fashion:men-fashion",
    "level": 1
  },
  {
    "parents": [
      {
        "name": "Fashion",
        "slug": "fashion"
      }
    ],
    "children": [
      {
        "slug": "fashion:kids-fashion:bottoms",
        "name": "Bottoms"
      },
      {
        "slug": "fashion:kids-fashion:outerwears-and-jackets",
        "name": "Outerwears and Jackets"
      },
      {
        "slug": "fashion:kids-fashion:accessories",
        "name": "Accessories"
      },
      {
        "slug": "fashion:kids-fashion:underwears",
        "name": "Underwears"
      },
      {
        "slug": "fashion:kids-fashion:shoes",
        "name": "Shoes"
      }
    ],
    "_id": "6269399e6370d44bb86102f5",
    "name": "Kids Fashion",
    "slug": "fashion:kids-fashion",
    "level": 1
  },
  {
    "parents": [
      {
        "name": "Fashion",
        "slug": "fashion"
      },
      {
        "name": "Kids Fashion",
        "slug": "fashion:kids-fashion"
      }
    ],
    "children": [],
    "_id": "6269399e6370d44bb86102f8",
    "name": "Bottoms",
    "slug": "fashion:kids-fashion:bottoms",
    "level": 2
  },
  {
    "parents": [
      {
        "name": "Fashion",
        "slug": "fashion"
      },
      {
        "name": "Kids Fashion",
        "slug": "fashion:kids-fashion"
      }
    ],
    "children": [],
    "_id": "6269399e6370d44bb86102fb",
    "name": "Outerwears and Jackets",
    "slug": "fashion:kids-fashion:outerwears-and-jackets",
    "level": 2
  },
  {
    "parents": [
      {
        "name": "Fashion",
        "slug": "fashion"
      },
      {
        "name": "Kids Fashion",
        "slug": "fashion:kids-fashion"
      }
    ],
    "children": [],
    "_id": "6269399e6370d44bb86102fe",
    "name": "Accessories",
    "slug": "fashion:kids-fashion:accessories",
    "level": 2
  },
  {
    "parents": [
      {
        "name": "Fashion",
        "slug": "fashion"
      },
      {
        "name": "Kids Fashion",
        "slug": "fashion:kids-fashion"
      }
    ],
    "children": [],
    "_id": "6269399e6370d44bb8610301",
    "name": "Underwears",
    "slug": "fashion:kids-fashion:underwears",
    "level": 2
  },
  {
    "parents": [
      {
        "name": "Fashion",
        "slug": "fashion"
      },
      {
        "name": "Kids Fashion",
        "slug": "fashion:kids-fashion"
      }
    ],
    "children": [],
    "_id": "6269399e6370d44bb8610304",
    "name": "Shoes",
    "slug": "fashion:kids-fashion:shoes",
    "level": 2
  },
  {
    "parents": [
      {
        "name": "Fashion",
        "slug": "fashion"
      },
      {
        "name": "Men Fashion",
        "slug": "fashion:men-fashion"
      }
    ],
    "children": [],
    "_id": "6269399e6370d44bb8610307",
    "name": "Bottoms",
    "slug": "fashion:men-fashion:bottoms",
    "level": 2
  }
];
const paginate = {
  "total": 34,
  "per_page": 10,
  "current_page": 3,
  "last_page": 4
}

export {categories, paginate}
