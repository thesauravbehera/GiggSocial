import React from 'react';
import { motion } from 'motion/react';
import { Star, ThumbsUp } from 'lucide-react';
import { Button } from '../ui/button';

interface Review {
  id: string;
  reviewer: string;
  rating: number;
  comment: string;
  date: string;
  sentiment: string;
}

interface ReviewsListProps {
  reviews: Review[];
}

export function ReviewsList({ reviews }: ReviewsListProps) {
  return (
    <div className="glass rounded-2xl p-8 border border-white/5">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white">Reviews</h2>
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-white fill-white" />
          <span className="text-xl font-bold text-white">4.8</span>
          <span className="text-gray-500">({reviews.length} reviews)</span>
        </div>
      </div>

      {/* Reviews */}
      <div className="space-y-6">
        {reviews.map((review, idx) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass rounded-xl p-6 border border-white/5"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-white mb-1">{review.reviewer}</h3>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'text-white fill-white'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                review.sentiment === 'very_positive' 
                  ? 'bg-white/10 text-white' 
                  : 'bg-white/5 text-gray-300'
              }`}>
                {review.sentiment === 'very_positive' ? 'Excellent' : 'Good'}
              </div>
            </div>

            <p className="text-gray-300 mb-4 leading-relaxed">{review.comment}</p>

            <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              <ThumbsUp className="w-4 h-4" />
              <span>Helpful</span>
            </button>
          </motion.div>
        ))}
      </div>

      {reviews.length === 0 && (
        <div className="text-center py-12">
          <Star className="w-16 h-16 text-gray-700 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No reviews yet</h3>
          <p className="text-gray-400 mb-6">
            Complete your first gig to receive reviews
          </p>
        </div>
      )}
    </div>
  );
}
