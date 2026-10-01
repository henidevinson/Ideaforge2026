import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, AlertCircle, Search } from 'lucide-react';

export interface OptionItem {
  value: string;
  label: string;
  subtext?: string;
}

interface CustomSelectProps {
  id?: string;
  label?: string;
  required?: boolean;
  value: string;
  onChange: (val: string) => void;
  options: (string | OptionItem)[];
  placeholder?: string;
  error?: string;
  icon?: React.ElementType;
  className?: string;
  disabled?: boolean;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  label,
  required,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  error,
  icon: Icon,
  className = '',
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const normalizedOptions: OptionItem[] = options.map((opt) =>
    typeof opt === 'string' ? { value: opt, label: opt } : opt
  );

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Focus search input when opened
  useEffect(() => {
    if (isOpen && normalizedOptions.length > 5 && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isOpen, normalizedOptions.length]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const filteredOptions = normalizedOptions.filter((opt) =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (opt.subtext && opt.subtext.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className={`w-full relative ${className}`} ref={containerRef}>
      {label && (
        <label 
          htmlFor={id} 
          className="block font-display text-xs uppercase font-bold text-white mb-1.5 flex items-center justify-between"
        >
          <span className="flex items-center gap-1.5">
            {Icon && <Icon className="w-3.5 h-3.5 text-[#A78BFA]" />}
            <span>{label}</span>
            {required && <span className="text-[#A78BFA]">*</span>}
          </span>
          {value && (
            <span className="text-[10px] font-mono text-emerald-400 uppercase font-semibold">
              ✓ Selected
            </span>
          )}
        </label>
      )}

      {/* Custom Trigger Button */}
      <button
        type="button"
        id={id}
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full text-left bg-[#0C061A] hover:bg-[#160B30] border-2 ${
          error
            ? 'border-red-500 focus:border-red-400 ring-1 ring-red-500/50'
            : isOpen
            ? 'border-[#A78BFA] ring-2 ring-[#6C63FF]/40 bg-[#160B30]'
            : 'border-[#E2E8F0]/30 hover:border-[#E2E8F0]'
        } rounded-xl px-3.5 py-2.5 sm:py-3 font-heading text-xs sm:text-sm font-bold text-white tracking-wide transition-all shadow-brutal-sm focus:outline-none flex items-center justify-between gap-2 cursor-pointer ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <div className="flex items-center gap-2.5 truncate">
          {Icon && (
            <div className="w-6 h-6 rounded-md bg-[#160B30] border border-[#E2E8F0]/20 flex items-center justify-center shrink-0">
              <Icon className="w-3.5 h-3.5 text-[#A78BFA]" />
            </div>
          )}
          <span className={`truncate ${!selectedOption ? 'text-[#94A3B8] font-mono font-normal' : 'text-white'}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0 ml-2">
          {selectedOption && (
            <span className="hidden sm:inline-block font-mono text-[9px] font-bold text-[#A78BFA] bg-[#160B30] px-1.5 py-0.5 rounded border border-[#A78BFA]/30 uppercase">
              OK
            </span>
          )}
          <div className={`flex items-center justify-center w-6 h-6 rounded-md bg-[#160B30] border border-[#E2E8F0]/25 transition-transform duration-200 ${isOpen ? 'rotate-180 border-[#A78BFA] bg-[#6C63FF]/30' : ''}`}>
            <ChevronDown className="w-3.5 h-3.5 text-[#E2E8F0]" />
          </div>
        </div>
      </button>

      {/* Floating Popover Menu */}
      {isOpen && (
        <div 
          role="listbox"
          className="absolute z-50 left-0 right-0 mt-2 bg-[#140A28] border-2 border-[#E2E8F0]/40 rounded-xl shadow-[0_16px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(108,99,255,0.45)] overflow-hidden backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Search box for long lists */}
          {normalizedOptions.length > 5 && (
            <div className="p-2 border-b border-[#E2E8F0]/15 bg-[#0C061A]">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Filter options..."
                  className="w-full bg-[#160B30] border border-[#E2E8F0]/25 text-white text-xs rounded-lg pl-8 pr-3 py-1.5 focus:border-[#A78BFA] focus:outline-none font-mono"
                />
              </div>
            </div>
          )}

          {/* Options List */}
          <div className="max-h-60 overflow-y-auto p-1.5 space-y-1">
            {filteredOptions.length === 0 ? (
              <div className="py-4 text-center text-xs font-mono text-[#CBD5E1]">
                No matching options found
              </div>
            ) : (
              filteredOptions.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(opt.value)}
                    className={`w-full text-left px-3 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-heading font-bold transition-all flex items-center justify-between gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-[#6C63FF] text-white border border-[#E2E8F0] shadow-brutal-sm'
                        : 'text-[#E2E8F0] hover:bg-[#6C63FF]/20 hover:text-white hover:border hover:border-[#E2E8F0]/30'
                    }`}
                  >
                    <div className="flex flex-col truncate">
                      <span className="truncate">{opt.label}</span>
                      {opt.subtext && (
                        <span className="text-[10px] font-mono text-[#CBD5E1] font-normal truncate">
                          {opt.subtext}
                        </span>
                      )}
                    </div>
                    {isSelected && (
                      <Check className="w-4 h-4 text-white shrink-0 stroke-[3]" />
                    )}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}

      {error && (
        <p className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5 font-mono">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};
