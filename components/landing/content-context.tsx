'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'en' | 'vi'

export interface CoasterContent {
  lang: Language
  header: {
    nav: { href: string; label: string }[]
    cta: string
  }
  hero: {
    eyebrow: string
    headline: string
    subheadline: string
    primaryCTA: string
    secondaryCTA: string
    price: string
    highlights: string[]
  }
  limitedOffer: {
    badge: string
    headline: string
    subheadline: string
    days: string
    hours: string
    mins: string
    secs: string
    formName: string
    formContact: string
    formSubmit: string
  }
  benefits: {
    eyebrow: string
    heading: string
    description: string
    items: { title: string; detail: string; tag: string }[]
  }
  lifestyle: {
    eyebrow: string
    heading: string
    body: string
  }
  care: {
    eyebrow: string
    heading: string
    description: string
    steps: { step: string; title: string; desc: string }[]
    noteTitle: string
    noteDesc: string
  }
  dimensions: {
    eyebrow: string
    heading: string
    description: string
    checkerTitle: string
    inchesLabel: string
    cmLabel: string
    sliderLabel: string
    coasterTitle: string
    coasterDesc: string
    holderTitle: string
    holderDesc: string
    fitIdeal: string
    fitFlush: string
    fitOversize: string
    cta: string
  }
  whatsIncluded: {
    eyebrow: string
    heading: string
    description: string
    items: { name: string; desc: string }[]
  }
  gallery: {
    eyebrow: string
    heading: string
    description: string
    slides: { src: string; alt: string; title: string; desc: string }[]
  }
  faq: {
    eyebrow: string
    heading: string
    description: string
    items: { q: string; a: string }[]
  }
  craftStory: {
    eyebrow: string
    title: string
    subtitle: string
    intro: string
    sec1Title: string
    sec1Body: string
    sec2Title: string
    sec2Body: string
    missionText: string
    giftingTitle: string
    giftingBody: string
    sec2Highlight: string
    mottoTitle: string
    mottoBrand: string
    mottoSub: string
    img1Caption: string
    img2Caption: string
  }
  story: {
    eyebrow: string
    heading: string
    body: string
    giftingTitle: string
    giftingBody: string
    formName: string
    formContact: string
    formQty1: string
    formQty2: string
    formQty3: string
    formSubmit: string
    tagline: string
    copyright: string
  }
  footer: {
    brandBio: string
    slogan: string
    contactTitle: string
    address: string
    phone: string
    email: string
    connectTitle: string
    facebookUrl: string
    instagramUrl: string
    pinterestUrl: string
    xUrl: string
    amazonCardTitle: string
    amazonCardDesc: string
    amazonCTA: string
    amazonCardNote: string
    amazonUrl: string
    copyright: string
    privacy: string
    terms: string
    shipping: string
    taglineBadge: string
  }
}

export const contentEN: CoasterContent = {
  lang: 'en',
  header: {
    nav: [
      { href: '#benefits', label: 'Why MAYTREDAN' },
      { href: '#details', label: 'Product Details' },
      { href: '#care', label: 'Care Guide' },
      { href: '#story', label: 'Our Story' },
      { href: '#faq', label: 'FAQs' },
    ],
    cta: 'Shop Now',
  },
  hero: {
    eyebrow: 'Handwoven in Vietnam',
    headline: 'A Little Nature,\nA Lot of Warmth.',
    subheadline:
      'Bring natural texture and timeless charm to everyday coffee and tea moments with a set of six handwoven rattan coasters and a matching holder.',
    primaryCTA: 'Shop Now',
    secondaryCTA: 'Discover Our Craft',
    price: '',
    highlights: [
      '100% natural rattan with warm honey-brown tones',
      'Complete set: 6 handwoven coasters + 1 matching holder',
      'Approx. 4 in (10 cm) across — perfect for mugs & glasses',
    ],
  },
  limitedOffer: {
    badge: 'SET OF 6 COASTERS + MATCHING HOLDER',
    headline: 'Vietnamese Craftsmanship, Natural Living',
    subheadline:
      'Handwoven from 100% natural Vietnamese rattan.\nReserve your set today with direct inquiry, or check back for live Amazon availability.',
    days: 'Days',
    hours: 'Hours',
    mins: 'Mins',
    secs: 'Secs',
    formName: 'Your full name',
    formContact: 'Email or phone number',
    formSubmit: 'Order Inquiries',
  },
  benefits: {
    eyebrow: 'Why MAYTREDAN',
    heading: 'Thoughtfully Woven for Everyday Living',
    description:
      'Made from natural rattan and shaped with a traditional circular weave, each coaster brings an inviting handcrafted touch to your tabletop.',
    items: [
      {
        title: 'Natural Rattan',
        detail:
          'Warm, organic texture and a natural honey-brown finish crafted from authentic Vietnamese rattan vines.',
        tag: 'Natural Materials',
      },
      {
        title: 'Handwoven Craftsmanship',
        detail:
          'Traditional woven circular detailing gives each coaster its individual, warm character.',
        tag: 'Artisan Made',
      },
      {
        title: 'A Complete Coordinated Set',
        detail:
          'Six round coasters with one custom-matching circular holder for tidy, compact storage.',
        tag: '6 Coasters + 1 Holder',
      },
      {
        title: 'Made for Everyday Spaces',
        detail:
          'An understated natural accent for coffee tables, work desks, dining areas and tea corners.',
        tag: 'Versatile Styling',
      },
    ],
  },
  lifestyle: {
    eyebrow: 'Everyday Styling',
    heading: 'The Small Details Make a Space Feel Like Home',
    body:
      'Style your coffee corner, dining table or afternoon tea setting with the relaxed charm and organic texture of natural rattan.',
  },
  care: {
    eyebrow: 'Product Care',
    heading: 'Simple Care for Natural Rattan',
    description:
      'Preserve the organic texture and honey-brown finish of handwoven rattan with straightforward, mindful care routines.',
    steps: [
      {
        step: 'Step 1',
        title: 'Gently Wipe Clean',
        desc: 'Gently wipe the coaster surface with a soft, slightly damp cloth after everyday use.',
      },
      {
        step: 'Step 2',
        title: 'Avoid Soaking in Water',
        desc: 'Do not soak or submerge in water; natural rattan breathes best when kept dry.',
      },
      {
        step: 'Step 3',
        title: 'Allow to Air Dry',
        desc: 'Allow coasters to dry completely in the air before nesting them back into the holder.',
      },
      {
        step: 'Step 4',
        title: 'Store in a Dry Space',
        desc: 'Keep in a clean, dry, well-ventilated place away from continuous dampness.',
      },
    ],
    noteTitle: 'Artisan Craft Note:',
    noteDesc:
      'Because each piece is handwoven from natural rattan vines in Vietnam, slight variations in color tone and circular weave details naturally occur, giving your set its own unique character.',
  },
  dimensions: {
    eyebrow: 'Dimensions & Sizing',
    heading: 'Dimensions & Drinkware Fit Guide',
    description:
      'Each round coaster measures approximately 4 inches (10 cm) across, sized to protect your surfaces and cradle everyday mugs, glasses, and tea sets.',
    checkerTitle: 'Cup Base Fit Checker',
    inchesLabel: 'Inches (in)',
    cmLabel: 'Centimeters (cm)',
    sliderLabel: 'Drinkware base diameter:',
    coasterTitle: 'Single Coaster',
    coasterDesc: 'Approx. 4 in across\nCircular weave',
    holderTitle: 'Matching Holder',
    holderDesc: 'Holds 6 coasters\nMatching container',
    fitIdeal:
      'Ideal Fit: Standard coffee mugs, teacups, whiskey glasses, and tumblers rest comfortably with a visible handwoven border.',
    fitFlush:
      'Edge-to-Edge Fit: Wide-base mugs and glassware sit flush across the handwoven 4-inch coaster surface.',
    fitOversize:
      'Oversized Base: Exceeds the standard 4-inch coaster diameter. Recommended for standard glasses and mugs under 4 in.',
    cta: 'Shop Now',
  },
  whatsIncluded: {
    eyebrow: 'The Complete Set',
    heading: "What's Included in Your Set",
    description:
      'Each MAYTREDAN set arrives coordinated and ready for daily use, keeping your surfaces protected and your coffee table tidy.',
    items: [
      {
        name: '6 Handwoven Rattan Coasters',
        desc: 'Approx. 4 in / 10 cm across, crafted with traditional circular weaving',
      },
      {
        name: '1 Matching Rattan Holder',
        desc: 'Neat circular container that stacks and holds all six coasters compactly',
      },
      {
        name: 'Natural Honey-Brown Tone',
        desc: 'Warm organic color that naturally complements coffee, tea, and tabletop decor',
      },
      {
        name: 'Handcrafted in Vietnam',
        desc: 'Woven with care by experienced artisan weavers celebrating natural living',
      },
    ],
  },
  gallery: {
    eyebrow: 'Visual Showcase',
    heading: 'Authentic Product Gallery',
    description:
      'Explore the woven details, dimensions, and everyday styling of MAYTREDAN rattan coasters.',
    slides: [
      {
        src: '/images/maytredan/hero.png',
        alt: 'MAYTREDAN handmade natural rattan coaster set with matching round holder',
        title: 'Complete 7-Piece Set',
        desc: '6 handmade coasters with matching circular holder in warm natural lighting',
      },
      {
        src: '/images/maytredan/features-craft.png',
        alt: 'Natural rattan material, handwoven texture and traditional weaving pattern details',
        title: 'Material & Craftsmanship',
        desc: 'Handwoven circular detailing, authentic vines and traditional edge finish',
      },
      {
        src: '/images/maytredan/dimensions-4inch.png',
        alt: '4-inch diameter (10.16 cm) coaster dimensions for coffee mugs, tea cups and glasses',
        title: '4-Inch Diameter & Drinkware Fit',
        desc: 'Approx. 4 in (10.16 cm) across — cradles coffee mugs, teacups and glasses',
      },
      {
        src: '/images/maytredan/lifestyle-living.png',
        alt: 'Natural Beauty for Everyday Living - MAYTREDAN coasters styled on coffee table',
        title: 'Natural Beauty for Everyday Living',
        desc: 'Organic rustic texture elevating living rooms and daily tea moments',
      },
      {
        src: '/images/maytredan/storage-holder.png',
        alt: '6 coasters and 1 matching holder for neat and organized tabletop storage',
        title: 'Neat & Organized Storage',
        desc: 'Coasters fit neatly in the matching holder, keeping your table clutter-free',
      },
      {
        src: '/images/maytredan/care-steps.png',
        alt: 'Easy steps: Place on table, set drinkware, wipe & dry, and store in holder',
        title: 'Simple Daily Use & Care',
        desc: 'Place on table, set drinkware, wipe & dry with cloth, and store in holder',
      },
      {
        src: '/images/maytredan/whats-included.png',
        alt: "What's Included: 1 matching holder and 6 handwoven rattan coasters",
        title: "What's Included in Your Set",
        desc: 'Complete coordinated set: 6 round coasters and 1 matching circular holder',
      },
      {
        src: '/images/maytredan/packshot-clean.png',
        alt: 'Authentic studio product packshot on white background',
        title: 'Authentic Product Packshot',
        desc: 'Clean studio perspective showing natural honey-brown tone and organic shape',
      },
    ],
  },
  faq: {
    eyebrow: 'Got Questions?',
    heading: 'Frequently Asked Questions',
    description: 'Helpful facts about our materials, sizing, and everyday care.',
    items: [
      {
        q: 'What is included in the set?',
        a: 'Six handmade natural rattan coasters and one matching circular storage holder, all crafted with traditional weaving.',
      },
      {
        q: 'How big is each coaster?',
        a: 'Each coaster measures approximately 4 inches (10 cm) across. Because each piece is handwoven, slight organic variations in sizing may naturally occur.',
      },
      {
        q: 'Are all coasters identical?',
        a: 'Natural rattan and individual handmade weaving result in subtle, graceful differences in shade and woven details, giving each coaster its own authentic character.',
      },
      {
        q: 'How do I clean them?',
        a: 'Gently wipe with a slightly damp cloth. Do not soak or immerse in water; let dry completely in the air before storing back in the holder.',
      },
      {
        q: 'Where are they made?',
        a: 'Handwoven in Vietnam by experienced traditional artisan weavers.',
      },
    ],
  },
  craftStory: {
    eyebrow: 'Vietnamese Artisan Heritage',
    title: 'Discover the Art of Rattan Weaving',
    subtitle: 'Centuries of craft heritage, woven into everyday moments.',
    intro:
      'In Vietnam, traditional rattan and bamboo weaving embodies centuries of patience, creativity, and artisan skill passed down through generations. Across generations, Vietnamese artisans have transformed natural vines into household goods that are as practical as they are enduringly beautiful.',
    sec1Title: 'The Beauty Behind Every Weave',
    sec1Body:
      'The journey of each coaster begins with carefully selected, mature natural rattan vines. Through mindful curing, shaping, and precise circular handweaving, humble natural fibers gradually transform into distinctive handcrafted pieces. Every circular contour reflects the patience, accuracy, and quiet dedication of the artisan.',
    sec2Title: 'Rooted in Traditional Craft. Designed for Modern Living.',
    sec2Body:
      'Our handmade rattan coaster set brings warmth, rustic texture, and timeless simplicity to everyday coffee and tea breaks—making home pauses feel more grounded and meaningful.',
    missionText:
      'MAYTREDAN celebrates the beauty of Vietnamese weaving traditions through practical home essentials. We pair natural materials with thoughtful, understated design to bring warmth and character into modern living spaces.',
    giftingTitle: 'A Thoughtful Gift for a Cozy Home',
    giftingBody:
      'A useful, decorative set of six handwoven rattan coasters with matching round holder for housewarmings, birthdays, and everyday gatherings with family and friends.',
    sec2Highlight:
      'Rooted in traditional values. Thoughtfully designed for modern living.',
    mottoTitle: 'MAYTREDAN – Vietnamese Craftsmanship, Natural Living.',
    mottoBrand: 'Vietnamese Craft Excellence – The Beauty of Natural Living.',
    mottoSub: '100% natural rattan handwoven by skilled artisans in Vietnam',
    img1Caption: 'Master artisans handweaving round rattan coasters with traditional circular coils',
    img2Caption: 'Artisan craft workshop in Vietnam where every piece is shaped with care and dedication',
  },
  story: {
    eyebrow: 'Our Story & Mission',
    heading: 'Vietnamese Craftsmanship, Natural Living',
    body:
      'MAYTREDAN celebrates the beauty of Vietnamese weaving traditions through practical home essentials. We pair natural materials with thoughtful, understated design to bring warmth and character into modern living spaces.',
    giftingTitle: 'A Thoughtful Gift for a Cozy Home',
    giftingBody:
      'A useful, decorative set of six handwoven rattan coasters with matching holder for housewarmings, birthdays, and everyday celebrations.',
    formName: 'Your full name',
    formContact: 'Email or phone number',
    formQty1: '1 Set',
    formQty2: '2 Sets',
    formQty3: '3 Sets',
    formSubmit: 'Order Inquiries',
    tagline: 'Handcrafted in Vietnam · Natural Rattan Home Essentials',
    copyright: '© MAYTREDAN. All rights reserved.',
  },
  footer: {
    brandBio:
      'MAYTREDAN celebrates authentic Vietnamese rattan weaving traditions through mindful, practical home essentials. Each piece brings warm organic texture to everyday coffee and tea rituals.',
    slogan: 'Vietnamese Craftsmanship –\nNatural Living',
    contactTitle: 'Contact Information',
    address: 'Km10, Nguyen Trai, Ha Dong, Hanoi, Vietnam',
    phone: '0365865481',
    email: 'contact@maytredan.com',
    connectTitle: 'Connect With MAYTREDAN',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61593039274816',
    instagramUrl: 'https://www.instagram.com/maytredan_crafts/',
    pinterestUrl: 'https://uk.pinterest.com/nguyenthikimthcstt/',
    xUrl: 'https://x.com/home',
    amazonCardTitle: 'Official Amazon Store',
    amazonCardDesc: 'Discover authentic MAYTREDAN products distributed through Amazon US.',
    amazonCTA: 'Shop on Amazon US',
    amazonCardNote:
      'Orders, shipping, and returns are fulfilled under standard Amazon terms.',
    amazonUrl: 'https://www.amazon.com',
    copyright: '© 2026 MAYTREDAN. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    shipping: 'Shipping & Returns',
    taglineBadge: 'Vietnamese Craftsmanship · Natural Living',
  },
}

export const contentVI: CoasterContent = {
  lang: 'vi',
  header: {
    nav: [
      { href: '#benefits', label: 'Ưu điểm' },
      { href: '#details', label: 'Chi tiết & Kích thước' },
      { href: '#care', label: 'Bảo quản' },
      { href: '#story', label: 'Câu chuyện' },
      { href: '#faq', label: 'Hỏi đáp' },
    ],
    cta: 'Đặt Mua Ngay',
  },
  hero: {
    eyebrow: 'Đan Thủ Công Tại Việt Nam',
    headline: 'Chút Chạm Tự Nhiên,\nTrọn Vẹn Ấm Áp.',
    subheadline:
      'Mang nét mộc mạc tự nhiên và vẻ đẹp vượt thời gian vào từng khoảnh khắc thưởng trà, cà phê mỗi ngày với bộ sáu miếng lót ly mây đan thủ công kèm khay đựng đồng bộ.',
    primaryCTA: 'Đặt Mua Ngay',
    secondaryCTA: 'Khám Phá Nghề Mây Tre Đan',
    price: '',
    highlights: [
      '100% mây guột tự nhiên với sắc nâu mật ong ấm cúng',
      'Trọn bộ tiện dụng: 6 miếng lót ly + 1 khay đựng tròn đồng bộ',
      'Đường kính xấp xỉ 4 in (~10 cm) — vừa vặn ly, cốc và tách trà',
    ],
  },
  limitedOffer: {
    badge: 'BỘ 6 LÓT LY + 1 KHAY ĐỰNG ĐỒNG BỘ',
    headline: 'Tinh hoa thủ công Việt – Vẻ đẹp sống tự nhiên.',
    subheadline:
      'Được đan hoàn toàn bằng tay từ 100% mây tự nhiên tại các làng nghề Việt Nam.\nĐăng ký giữ bộ sản phẩm hoặc nhận thông báo mở bán chính thức.',
    days: 'Ngày',
    hours: 'Giờ',
    mins: 'Phút',
    secs: 'Giây',
    formName: 'Họ và tên của bạn',
    formContact: 'Số điện thoại hoặc Email',
    formSubmit: 'Đăng Ký Đặt Hàng',
  },
  benefits: {
    eyebrow: 'Lý Do Chọn MAYTREDAN',
    heading: 'Chăm Chút Từng Mối Đan Cho Cuộc Sống Thường Nhật',
    description:
      'Được làm từ sợi mây tự nhiên và tạo hình với kỹ thuật đan tròn truyền thống, mỗi chiếc lót ly mang đến nét mộc mạc và cảm giác ấm cúng cho không gian sống của bạn.',
    items: [
      {
        title: 'Chất Liệu Mây Tự Nhiên',
        detail:
          'Mộc mạc, giàu kết cấu tự nhiên cùng sắc nâu mật ong ấm cúng được chế tác từ sợi mây guột nguyên bản Việt Nam.',
        tag: 'Chất Liệu Thuần Tự Nhiên',
      },
      {
        title: 'Nghệ Thuật Đan Tay Thủ Công',
        detail:
          'Đường đan xoắn ốc truyền thống tạo nên nét duyên dáng riêng biệt và dấu ấn độc bản cho từng chiếc lót ly.',
        tag: 'Chế Tác Tỉ Mỉ',
      },
      {
        title: 'Trọn Bộ Đồng Bộ Tiện Dụng',
        detail:
          'Sáu miếng lót ly tròn xếp gọn gàng trong khay đựng đồng điệu đi kèm, giữ cho không gian bàn trà luôn ngăn nắp.',
        tag: '6 Lót Ly + 1 Khay Đựng',
      },
      {
        title: 'Phù Hợp Mọi Không Gian Sống',
        detail:
          'Điểm nhấn mộc mạc, tinh tế cho bàn cà phê phòng khách, bàn làm việc, bàn ăn và góc thưởng trà thư thái.',
        tag: 'Bài Trí Đa Năng',
      },
    ],
  },
  lifestyle: {
    eyebrow: 'Bài Trí Thường Nhật',
    heading: 'Những Chi Tiết Nhỏ Tạo Nên Sự Ấm Cúng Của Tổ Ấm',
    body:
      'Tô điểm góc cà phê sáng, bàn ăn gia đình hay buổi trà chiều thư thái với nét duyên dáng nhẹ nhàng và vẻ đẹp mộc mạc của chất liệu mây tự nhiên.',
  },
  care: {
    eyebrow: 'Hướng Dẫn Bảo Quản',
    heading: 'Chăm Sóc Sản Phẩm Mây Đúng Cách & Bền Đẹp',
    description:
      'Gìn giữ độ bền đẹp và sắc nâu mật ong óng ả của mây thủ công với các bước chăm sóc đơn giản và nhẹ nhàng.',
    steps: [
      {
        step: 'Bước 1',
        title: 'Lau Nhẹ Bằng Khăn Ẩm',
        desc: 'Nhẹ nhàng lau sạch bề mặt lót ly bằng một chiếc khăn mềm, hơi ẩm sau mỗi lần sử dụng hàng ngày.',
      },
      {
        step: 'Bước 2',
        title: 'Tránh Ngâm Trong Nước',
        desc: 'Không ngâm hoặc rửa ngập sản phẩm trong nước; sợi mây tự nhiên bền nhất khi được giữ khô ráo.',
      },
      {
        step: 'Bước 3',
        title: 'Phơi Khô Tự Nhiên',
        desc: 'Để lót ly khô ráo hoàn toàn ngoài không khí thoáng mát trước khi xếp gọn gàng trở lại vào khay.',
      },
      {
        step: 'Bước 4',
        title: 'Bảo Quản Nơi Khô Thoáng',
        desc: 'Đặt ở nơi sạch sẽ, khô ráo, thoáng mát và tránh tiếp xúc với môi trường ẩm thấp kéo dài.',
      },
    ],
    noteTitle: 'Lưu Ý Thủ Công MAYTREDAN:',
    noteDesc:
      'Vì mỗi chiếc lót ly được các nghệ nhân đan tay từ sợi mây guột tự nhiên, sự chênh lệch nhẹ về sắc thái nâu và các mối nối đan tròn là dấu ấn mộc mạc đặc trưng của sản phẩm thủ công truyền thống.',
  },
  dimensions: {
    eyebrow: 'Kích Thước & Độ Vừa Vặn',
    heading: 'Thông Số & Hướng Dẫn Vừa Vặn Cho Ly Cốc',
    description:
      'Mỗi chiếc lót ly có đường kính xấp xỉ 4 inches (~10 cm), được tính toán tỉ mỉ để bảo vệ mặt bàn và nâng đỡ êm ái các loại ly, cốc, tách trà thông dụng.',
    checkerTitle: 'Kiểm Tra Độ Vừa Đáy Ly',
    inchesLabel: 'Inches (in)',
    cmLabel: 'Centimet (cm)',
    sliderLabel: 'Đường kính đáy ly của bạn:',
    coasterTitle: '1 Miếng Lót Ly',
    coasterDesc: 'Đường kính ~10 cm\nĐan xoáy thủ công',
    holderTitle: 'Khay Đựng Đi Kèm',
    holderDesc: 'Chứa đủ 6 miếng lót\nKhay tròn đồng bộ',
    fitIdeal:
      'Độ Vừa Hoàn Hảo: Ly cà phê, tách trà, ly thủy tinh và tumbler nằm êm ái, chừa viền mây đan tròn thanh lịch bao quanh.',
    fitFlush:
      'Vừa Khít Bề Mặt: Đáy ly lớn che phủ trọn vẹn bề mặt lót ly 4 inch (~10 cm).',
    fitOversize:
      'Kích Thước Vượt Chuẩn: Đáy bình hoặc cốc vượt quá đường kính 4 inch. Phù hợp nhất cho ly cốc tiêu chuẩn dưới 4 in.',
    cta: 'Đặt Mua Ngay',
  },
  whatsIncluded: {
    eyebrow: 'Trọn Bộ Sản Phẩm',
    heading: 'Chi Tiết Trọn Bộ 7 Món Trong Hộp',
    description:
      'Mỗi bộ sản phẩm MAYTREDAN được chuẩn bị đồng bộ và chu đáo, sẵn sàng bảo vệ mặt bàn và giữ không gian sống luôn ngăn nắp, trang nhã.',
    items: [
      {
        name: '6 Miếng Lót Ly Mây Đan Thủ Công',
        desc: 'Đường kính xấp xỉ 4 in (~10 cm), chế tác bằng kỹ thuật đan xoáy tròn truyền thống',
      },
      {
        name: '1 Khay Đựng Tròn Bằng Mây Đồng Bộ',
        desc: 'Khay mây tròn tinh gọn, xếp chồng vừa vặn toàn bộ 6 chiếc lót ly ngăn nắp',
      },
      {
        name: 'Sắc Nâu Mật Ong Tự Nhiên',
        desc: 'Gam màu mộc ấm áp, tự nhiên hòa quyện với mọi phong cách bàn trà và nội thất',
      },
      {
        name: 'Đan Thủ Công Tại Việt Nam',
        desc: 'Chế tác tỉ mỉ bởi các nghệ nhân làng nghề mây tre đan, tôn vinh lối sống tự nhiên',
      },
    ],
  },
  gallery: {
    eyebrow: 'Hình Ảnh Thực Tế',
    heading: 'Bộ Sưu Tập Hình Ảnh Chân Thật',
    description:
      'Khám phá chi tiết từng mối đan mây, quy cách đóng gói và bài trí thực tế của bộ lót ly\u00A0MAYTREDAN.',
    slides: [
      {
        src: '/images/maytredan/hero.png',
        alt: 'Trọn bộ 7 món gồm 6 lót ly mây và khay đựng tròn đồng bộ MAYTREDAN',
        title: 'Trọn Bộ 7 Món Đồng Bộ',
        desc: '6 miếng lót ly kèm khay đựng tròn đồng bộ trong ánh sáng tự nhiên ấm áp',
      },
      {
        src: '/images/maytredan/features-craft.png',
        alt: 'Chi tiết chất liệu mây tự nhiên, đường đan xoắn ốc và viền khay mây truyền thống',
        title: 'Chất Liệu & Đường Đan Thủ Công',
        desc: 'Sợi mây tự nhiên, đường đan xoắn ốc tinh tế và viền khay đan tay truyền thống',
      },
      {
        src: '/images/maytredan/dimensions-4inch.png',
        alt: 'Kích thước đường kính 4-Inch (10.16 cm) vừa vặn ly cà phê, tách trà và cốc nước',
        title: 'Kích Thước Chuẩn ~4 Inch',
        desc: 'Đường kính 10.16 cm nâng đỡ êm ái ly cà phê, tách trà và cốc nước',
      },
      {
        src: '/images/maytredan/lifestyle-living.png',
        alt: 'Bài trí bộ lót ly MAYTREDAN trên bàn cà phê phòng khách ấm cúng',
        title: 'Vẻ Đẹp Tự Nhiên Cho Không Gian Sống',
        desc: 'Điểm nhấn mộc mạc, ấm cúng cho bàn cà phê phòng khách và giờ trà chiều',
      },
      {
        src: '/images/maytredan/storage-holder.png',
        alt: 'Khay mây tròn đựng xếp chồng 6 chiếc lót ly ngăn nắp',
        title: 'Khay Đựng Xếp Chồng Gọn Gàng',
        desc: 'Xếp vừa vặn 6 miếng lót ly trong khay mây tròn, giữ mặt bàn luôn ngăn nắp',
      },
      {
        src: '/images/maytredan/care-steps.png',
        alt: 'Các bước sử dụng và lau chùi: Đặt lên bàn, để ly cốc, lau khô và cất vào khay',
        title: 'Hướng Dẫn Sử Dụng & Vệ Sinh',
        desc: 'Đặt lên bàn, nâng đỡ ly cốc, lau nhẹ bằng khăn mềm và cất gọn vào khay',
      },
      {
        src: '/images/maytredan/whats-included.png',
        alt: 'Chi tiết trọn bộ sản phẩm: 1 khay đựng tròn và 6 miếng lót ly mây đan',
        title: 'Chi Tiết Trọn Bộ 7 Món Trong Hộp',
        desc: 'Trọn bộ tiện dụng gồm 6 lót ly mây tròn và 1 khay đựng đồng bộ',
      },
      {
        src: '/images/maytredan/packshot-clean.png',
        alt: 'Ảnh chụp sản phẩm thực tế trên nền trắng không qua chỉnh sửa',
        title: 'Ảnh Chụp Sản Phẩm Chân Thực',
        desc: 'Góc chụp rõ nét trên nền trắng thể hiện trọn vẹn màu mây tự nhiên và kết cấu đan',
      },
    ],
  },
  faq: {
    eyebrow: 'Hỏi & Đáp',
    heading: 'Câu Hỏi Thường Gặp',
    description: 'Những giải đáp chi tiết về chất liệu, kích thước và cách chăm sóc sản phẩm.',
    items: [
      {
        q: 'Bộ sản phẩm bao gồm những gì?',
        a: 'Bộ sản phẩm bao gồm 06 miếng lót ly mây đan thủ công và 01 khay đựng tròn đồng bộ, tất cả đều được chế tác tỉ mỉ từ sợi mây guột tự nhiên.',
      },
      {
        q: 'Kích thước mỗi miếng lót ly là bao nhiêu?',
        a: 'Mỗi chiếc lót ly có đường kính xấp xỉ 4 inches (~10 cm), vừa vặn hoàn hảo với hầu hết các loại cốc cà phê, tách trà, ly thủy tinh và tumbler. Vì được đan tay thủ công nên kích thước có thể chênh lệch tự nhiên rất nhỏ.',
      },
      {
        q: 'Các miếng lót ly có giống hệt nhau không?',
        a: 'Chất liệu mây tự nhiên kết hợp thao tác đan tay truyền thống tạo nên những khác biệt tinh tế về sắc thái nâu mật ong và đường đan tròn, mang lại vẻ đẹp mộc mạc và độc bản cho từng sản phẩm.',
      },
      {
        q: 'Tôi nên vệ sinh và lau chùi lót ly như thế nào?',
        a: 'Nhẹ nhàng lau sạch bằng khăn mềm hơi ẩm sau mỗi lần sử dụng. Tuyệt đối không ngâm ngập trong bồn nước hay dùng máy rửa bát; hãy để lót ly khô ráo hoàn toàn ngoài không khí trước khi xếp lại vào khay.',
      },
      {
        q: 'Sản phẩm được chế tác ở đâu?',
        a: 'Sản phẩm được đan thủ công hoàn toàn tại Việt Nam bởi bàn tay khéo léo của các nghệ nhân làng nghề mây tre đan truyền thống.',
      },
    ],
  },
  craftStory: {
    eyebrow: 'Di Sản Làng Nghề Thủ Công',
    title: 'Khám Phá Nghệ Thuật Mây Tre Đan',
    subtitle: 'Di sản hàng trăm năm, đan dệt trong từng khoảnh khắc đời thường.',
    intro:
      'Tại Việt Nam, nghề mây tre đan không chỉ đơn thuần là một nghề thủ công truyền thống mà còn là biểu tượng của sự kiên nhẫn, sáng tạo và đôi bàn tay khéo léo, được gìn giữ và truyền lại qua nhiều thế hệ. Trải qua hàng trăm năm, những người nghệ nhân Việt Nam đã biến những sợi mây tre tự nhiên thành các sản phẩm vừa đẹp mắt, vừa hữu ích trong cuộc sống hằng ngày.',
    sec1Title: 'Vẻ đẹp đằng sau từng đường đan',
    sec1Body:
      'Hành trình tạo nên một sản phẩm bắt đầu từ việc lựa chọn kỹ lưỡng những nguyên liệu tự nhiên. Qua các công đoạn sơ chế, tạo hình và đan lát tỉ mỉ, những sợi mây giản dị dần trở thành các sản phẩm thủ công mang nét đẹp riêng. Mỗi họa tiết đan đều thể hiện sự chăm chút, độ chính xác và tâm huyết của người nghệ nhân đối với nghề truyền thống.',
    sec2Title: 'Được tạo nên từ giá trị truyền thống. Thiết kế dành cho cuộc sống hiện đại.',
    sec2Body:
      'Bộ lót ly mây đan thủ công MAYTREDAN mang đến sự ấm áp, nét mộc mạc và vẻ đẹp giản dị vượt thời gian, góp phần làm cho những khoảnh khắc thưởng thức trà và cà phê hằng ngày trở nên gần gũi và ý nghĩa hơn.',
    missionText:
      'MAYTREDAN tôn vinh vẻ đẹp của làng nghề mây đan truyền thống Việt Nam qua những vật dụng thường nhật hữu ích. Chúng tôi kết hợp nguyên liệu tự nhiên với thiết kế mộc mạc, tinh tế để mang lại sự ấm áp và dấu ấn riêng cho không gian sống hiện đại.',
    giftingTitle: 'Món Quà Tinh Tế Cho Tổ Ấm Yêu Thương',
    giftingBody:
      'Bộ 6 chiếc lót ly mây đan kèm khay đựng tròn là món quà hữu ích, trang nhã cho dịp tân gia, sinh nhật hay những buổi gặp gỡ gia đình, bạn bè.',
    sec2Highlight:
      'Được tạo nên từ giá trị truyền thống. Thiết kế dành cho cuộc sống hiện đại.',
    mottoTitle: 'MAYTREDAN – Vietnamese Craftsmanship, Natural Living.',
    mottoBrand: 'Tinh hoa thủ công Việt – Vẻ đẹp sống tự nhiên.',
    mottoSub: '100% mây tự nhiên đan tay tại các làng nghề truyền thống Việt Nam',
    img1Caption: 'Nghệ nhân đan tay từng chiếc lót ly mây tròn theo kỹ thuật xoáy ốc truyền thống',
    img2Caption: 'Không gian xưởng thủ công nơi từng sợi mây được tuyển chọn và đan dệt tỉ mỉ',
  },
  story: {
    eyebrow: 'Câu Chuyện & Sứ Mệnh',
    heading: 'Nghệ Thuật Mây Đan Thủ Công Việt Nam, Sống Thuận Tự Nhiên',
    body:
      'MAYTREDAN tôn vinh vẻ đẹp của làng nghề mây đan truyền thống Việt Nam qua những vật dụng thường nhật hữu ích. Chúng tôi kết hợp nguyên liệu tự nhiên với thiết kế mộc mạc, tinh tế để mang lại sự ấm áp và dấu ấn riêng cho không gian sống hiện đại.',
    giftingTitle: 'Món Quà Tinh Tế Cho Tổ Ấm Yêu Thương',
    giftingBody:
      'Bộ 6 chiếc lót ly mây đan kèm khay đựng tròn là món quà hữu ích, trang nhã cho dịp tân gia, sinh nhật hay những buổi gặp gỡ gia đình, bạn bè.',
    formName: 'Họ và tên của bạn',
    formContact: 'Email hoặc số điện thoại',
    formQty1: '1 Bộ',
    formQty2: '2 Bộ',
    formQty3: '3 Bộ',
    formSubmit: 'Gửi Yêu Cầu Đặt Hàng',
    tagline: 'Chế tác thủ công tại Việt Nam · Đồ gia dụng mây tự nhiên cao cấp',
    copyright: '© MAYTREDAN. Bảo lưu mọi quyền.',
  },
  footer: {
    brandBio:
      'MAYTREDAN tôn vinh vẻ đẹp của nghề mây tre đan truyền thống Việt Nam qua những sản phẩm gia dụng tinh tế, mang lại nét mộc mạc và sự ấm áp cho từng khoảnh khắc thưởng trà, cà phê thường nhật.',
    slogan: 'Tinh hoa thủ công Việt –\nVẻ đẹp sống tự nhiên.',
    contactTitle: 'Thông Tin Liên Hệ',
    address: 'Km10, Nguyễn Trãi, Hà Đông, Hà Nội, Việt Nam',
    phone: '0365865481',
    email: 'contact@maytredan.com',
    connectTitle: 'Kết Nối Với MAYTREDAN',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61593039274816',
    instagramUrl: 'https://www.instagram.com/maytredan_crafts/',
    pinterestUrl: 'https://uk.pinterest.com/nguyenthikimthcstt/',
    xUrl: 'https://x.com/home',
    amazonCardTitle: 'Mua hàng chính hãng',
    amazonCardDesc: 'Khám phá sản phẩm MAYTREDAN được phân phối qua Amazon US.',
    amazonCTA: 'Mua hàng trên Amazon US',
    amazonCardNote:
      'Đơn hàng, vận chuyển và đổi trả được xử lý theo các điều kiện áp dụng trên Amazon.',
    amazonUrl: 'https://www.amazon.com',
    copyright: '© 2026 MAYTREDAN. Bảo lưu mọi quyền.',
    privacy: 'Chính sách bảo mật',
    terms: 'Điều khoản dịch vụ',
    shipping: 'Vận chuyển & Đổi trả',
    taglineBadge: 'Tinh hoa thủ công Việt · Vẻ đẹp sống tự nhiên',
  },
}

interface LanguageContextProps {
  lang: Language
  setLang: (l: Language) => void
  t: CoasterContent
}

const LanguageContext = createContext<LanguageContextProps>({
  lang: 'vi',
  setLang: () => {},
  t: contentVI,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('vi')

  useEffect(() => {
    const saved = localStorage.getItem('maytredan_lang') as Language | null
    if (saved === 'en' || saved === 'vi') {
      setLangState(saved)
    } else {
      setLangState('vi')
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    try {
      localStorage.setItem('maytredan_lang', newLang)
    } catch {}
  }

  const t = lang === 'vi' ? contentVI : contentEN

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

