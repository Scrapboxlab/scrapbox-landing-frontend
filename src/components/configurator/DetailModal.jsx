import { Play } from 'lucide-react'
import Modal from '../ui/Modal'

export default function DetailModal({ item, isOpen, onClose }) {
  const isVideo = item?.mediaUrl && (item.mediaUrl.endsWith('.mp4') || item.mediaUrl.endsWith('.webm'))

  return (
    <Modal
      isOpen={isOpen && !!item}
      onClose={onClose}
      label={item?.name}
      className="max-w-2xl rounded-3xl bg-[#0d1224]"
    >
      {item && (
        <>
          {/* Media */}
          <div className="w-full aspect-video bg-[#111827] rounded-t-3xl overflow-hidden flex items-center justify-center border-b border-white/[0.06]">
            {item.mediaUrl ? (
              isVideo ? (
                <video
                  src={item.mediaUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={item.mediaUrl}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              )
            ) : (
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                  <Play size={20} className="text-white/20 ml-0.5" />
                </div>
                <span className="text-xs text-white/30">Demo próximamente</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8 pb-10">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-3 pr-8">
              {item.name}
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              {item.longDescription || item.description}
            </p>
          </div>
        </>
      )}
    </Modal>
  )
}
