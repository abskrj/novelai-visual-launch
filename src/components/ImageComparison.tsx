
import React from 'react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Slider } from "@/components/ui/slider";

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const ImageComparison = ({
  beforeImage,
  afterImage,
  beforeLabel = "Reality",
  afterLabel = "AI Generated"
}: ImageComparisonProps) => {
  const [position, setPosition] = React.useState(50);

  return (
    <div className="relative w-full rounded-xl overflow-hidden border bg-background shadow-xl">
      <div className="aspect-[16/9] relative">
        <ResizablePanelGroup
          direction="horizontal"
          onLayout={(sizes) => {
            setPosition((sizes[0] / 100) * 100);
          }}
          className="h-full"
        >
          <ResizablePanel defaultSize={50} minSize={10} className="relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={beforeImage}
                alt={beforeLabel}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">
              {beforeLabel}
            </div>
          </ResizablePanel>
          
          <ResizableHandle withHandle className="bg-white w-1 border-r border-l border-white">
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
              <div className="h-8 w-8 flex items-center justify-center bg-primary rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </div>
            </div>
          </ResizableHandle>
          
          <ResizablePanel defaultSize={50} minSize={10} className="relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={afterImage}
                alt={afterLabel}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">
              {afterLabel}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default ImageComparison;
