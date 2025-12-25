import { videoUrls } from '../config/videoUrls';

export interface IndustryDataItem {
  title: string;
  category: string;
  features: string[];
  video: {
    title: string;
    thumbnail: string;
    src: string;
    type: string;
  };
}

export const industryData: IndustryDataItem[] = [
  {
    title: 'Construction Real-Time Data Capture',
    category: 'Smart Site Engineering',
    features: [
      'Automate headcount capture and eliminate manual paper log errors.',
      'High-precision exclusion zone enforcement for restricted areas.',
      'Real-time proximity alerts between mobile plants and ground crew.'
    ],
    video: {
      title: 'Real-Time Site Data Capture',
      thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
      src: videoUrls.construction,
      type: 'mp4'
    }
  },
  {
    title: 'Smart Museum Strategy',
    category: 'Visitor Experience & Security',
    features: [
      '60% reduction in artifact risk via invisible digital fences.',
      '40% faster child-safety response through real-time tracking.',
      'Automated intrusion alarms focused on high-value relics.'
    ],
    video: {
      title: 'Digital Gallery Experience',
      thumbnail: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&q=80&w=600',
      src: videoUrls.museum,
      type: 'mp4'
    }
  },
  {
    title: 'Intelligent Warehouses',
    category: 'Throughput Optimization',
    features: [
      '90% reduction in search time for pallets, ULDs, and equipment.',
      '99.9% inventory accuracy via automated drop-off logging.',
      'Forklift-pedestrian anti-collision protocols via sub-meter logic.'
    ],
    video: {
      title: 'Warehouse Precision Demo',
      thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600',
      src: videoUrls.logistics,
      type: 'mp4'
    }
  },
  {
    title: 'Smart Hospital',
    category: 'Patient & Asset Security',
    features: [
      'Critical asset search and retrieval reduced to under 30 seconds.',
      'Integrated SOS buttons on staff badges for instant response.',
      'Maternal-infant pairing alarms and patient wandering protection.'
    ],
    video: {
      title: 'Healthcare Asset Lifecycle',
      thumbnail: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600',
      src: videoUrls.hospital,
      type: 'mp4'
    }
  },
  {
    title: 'Retail Intelligence',
    category: 'Behavioral Analytics',
    features: [
      'Shelf-level navigation for customers via mobile SDK.',
      'Heat-maps identifying high-traffic aisles and bottlenecks.',
      '1-to-1 mobile marketing based on exact product proximity.'
    ],
    video: {
      title: 'Retail Analytics Engine',
      thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600',
      src: videoUrls.retail,
      type: 'mp4'
    }
  },
  {
    title: 'Airport Operations',
    category: 'Unified Hub Visibility',
    features: [
      'Integrated BDS + AoA tracking for indoor/outdoor ULD management.',
      '100% visibility during handover between terminal and apron.',
      'Real-time coordination for ground crew, trailers, and cargo.'
    ],
    video: {
      title: 'Airport Operations Matrix',
      thumbnail: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&q=80&w=800',
      src: videoUrls.airport,
      type: 'mp4'
    }
  }
];

