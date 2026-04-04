/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useFormSubmit } from "@/app/hooks/useFormSubmit";
import { JobFormData } from "@/app/types/form.types";
import { CONFIG } from "@/config";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

interface Job {
  id: string;
  title: string;
  location: string;
  employmentType: string;
  experience: string;
  isUrgent: boolean;
  image: string;
  description: string;
  keyResponsibilities: string[];
  requirements: string[];
}

const CareerContent = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [openCVModal, setOpenCVModal] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch(CONFIG.careerData);

        if (!response.ok) {
          throw new Error(`Failed to fetch jobs: ${response.status}`);
        }

        const data = await response.json();

        if (data.meta.status === "success" && data.data) {
          // Transform API data
          const transformedJobs = data.data.map((job: any, index: number) => ({
            id: job._id || `job-${index}`,
            title: job.title || "",
            location: job.location || "",
            employmentType: job.employmentType || "Full-time",
            experience: job.experience || "",
            isUrgent: job.isUrgent || false,
            image: job.image || "",
            description: job.description || "",
            keyResponsibilities: job.keyResponsibilities || [],
            requirements: job.requirements || [],
          }));

          setJobs(transformedJobs);
        }
      } catch (err) {
        toast.error("Failed to load job openings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "rgb(17, 17, 33)",
            color: "white",
            border: "1px solid rgb(212,175,55)/30",
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "rgb(17, 17, 33)",
            },
          },
        }}
      />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      <section className="relative px-6 md:px-20 lg:px-40 py-10 bg-linear-to-b from-[bg-primary] via-white to-gray-200 text-gray-800">
        <div className="mx-auto max-w-[1200px]">
          <div className="@container">
            <div className="relative overflow-hidden rounded-2xl">
              <div
                className="flex min-h-[500px] flex-col items-center justify-center text-center p-8 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(17, 17, 33, 0.7), rgba(17, 17, 33, 0.9)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTIgt3XPSCkFyncp5USkH9Vs2BAJqY7dV6vUceJRMW2I9nsV1ydEVaFuIqO8wmpzym-zJn7oyp64mscfJQ2Ju85-X_CChcLugw82ovMAcx_NtlcdTNarAz0rsEHCmr9BftatQI_1l9d3Rd0d-5tujKTGp1iU9xYgdS4a1rknDeokvH5t4mUtrojLR0giADmj5I0D8UWmIlp8iZ3EfWUflUYXoH0NTzCarzUx87fS-EqQJnSYmqG8f082y_zbERy-NO7YIoauW3Xqs")`,
                }}
              >
                <span className="bg-[rgb(212,175,55/10%)] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 border border-white/20">
                  Recruitment 2026
                </span>
                <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight max-w-3xl mb-6">
                  Build the Future with <br />
                  <span className="gold-gradient-text">AL RASHIDEEN</span>
                </h1>
                <p className="text-white/70 text-base md:text-xl max-w-2xl font-light leading-relaxed mb-10">
                  Join the leading force in UAE&apos;s infrastructure. We are
                  looking for skilled professionals to operate and manage our
                  world-class fleet of heavy machinery.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => {
                      const element = document.getElementById("job-openings");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="bg-[rgba(20_49_117)] hover:scale-105 transition-transform text-white text-base font-bold px-10 py-4 rounded-xl cursor-pointer"
                  >
                    View Openings
                  </button>
                  <button
                    onClick={() => router.push("/contact")}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-base font-bold px-10 py-4 rounded-xl border border-white/20 transition-all cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-6 md:px-20 lg:px-40 py-8 bg-white  border-y border-[rgb(36,36,71)]/50">
        <div className="mx-auto max-w-[1200px] grid grid-cols-2 gap-8 text-center place-items-center">
          <div>
            <p className="text-[rgba(20_49_117)] text-3xl font-black">100+</p>
            <p className="text-white/50 dark:text-[rgb(36,36,71)] text-xs uppercase tracking-widest mt-1 text-nowrap">
              Employees
            </p>
          </div>
          <div>
            <p className="text-[rgba(20_49_117)] text-3xl font-black">24+</p>
            <p className="text-white/50 dark:text-[rgb(36,36,71)] text-xs uppercase tracking-widest mt-1 text-nowrap">
              Years Experience
            </p>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section
        id="job-openings"
        className="px-6 md:px-10 lg:px-30 py-16 sm:py-20 bg-linear-to-r from-[bg-primary] via-white to-gray-200 text-gray-800"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-end justify-between mb-12 border-l-4 border-black pl-6">
            <div>
              <h2 className="text-secondary text-3xl font-bold tracking-tight">
                Current Openings
              </h2>
              <p className=" text-black/80 mt-2">
                Explore opportunities across the Emirates
              </p>
            </div>
            <div className="hidden md:block">
              <span className="text-black/80 text-sm">
                {loading
                  ? "Loading..."
                  : `Showing ${jobs.length} available roles`}
              </span>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center text-secondary py-20 flex-col">
              <div className="animate-spin rounded-full text-secondary h-12 w-12 border-b-2 border-black"></div>
              <p className="text-secondary mt-3">Loading Jobs</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-20 bg-white/20 rounded-2xl border border-black">
              <span className="material-symbols-outlined text-6xl text-black/30 mb-4">
                work_outline
              </span>
              <h3 className="text-secondary text-xl font-bold mb-2">
                No Job Openings Yet
              </h3>
              <p className="text-black/50 max-w-md mx-auto">
                We currently don&apos;t have any open positions. Please check
                back later or submit your CV for future opportunities.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="group bg-white/20 rounded-2xl p-6 border cursor-pointer border-black/20 text-secondary hover:border-black/20 transition-all "
                >
                  <div
                    className="w-full h-48 bg-center bg-cover rounded-xl mb-6 overflow-hidden"
                    style={{ backgroundImage: `url("${job.image}")` }}
                  ></div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-black text-xl font-bold group-hover:text-gold transition-colors">
                      {job.title}
                    </h3>
                    <span
                      className={`text-[10px] font-bold px-2 py-1 rounded uppercase  ${
                        job.isUrgent
                          ? "bg-black/30 text-gray-100  border-white/20 border-[1px]"
                          : "bg-white/50 text-black/60 border border-white/10"
                      }`}
                    >
                      {job.isUrgent ? "Urgent" : "Standard"}
                    </span>
                  </div>
                  <div className="space-y-2 mb-8">
                    <div className="flex items-center gap-2 text-black text-sm">
                      <span className="material-symbols-outlined text-black text-base mb-1">
                        location_on
                      </span>
                      {job.location} • {job.employmentType}
                    </div>
                    <div className="flex items-center gap-2 text-black text-sm">
                      <span className="material-symbols-outlined text-black text-base mb-1">
                        work
                      </span>
                      Experience: {job.experience}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="w-full bg-black py-3 rounded-lg border border-white/10 text-white font-bold 
             hover:bg-[rgba(20_49_117)] hover:text-white 
             transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="hover:text-white">View Details</span>
                    <span className="material-symbols-outlined text-sm hover:text-white">
                      arrow_forward
                    </span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedJob && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedJob(null)}
        >
          <div
            className="bg-white/10 border border-[rgba(20_49_117)]/30 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="sticky top-0 bg-primary border-b border-white/10 px-[12px] sm:px-6 pt-3 pb-2 sm:py-2 flex justify-between items-start">
              <div className="flex-1 relative">
                <div className="flex items-start justify-between ">
                  <h3 className="text-secondary text-[16px] sm:text-[20px] font-bold ml-1 sm:ml-0">
                    {selectedJob.title}
                  </h3>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="text-white transition-colors cursor-pointer absolute right-0 top-1/2 -translate-y-1/2"
                  >
                    <span className="text-[14px] sm:text-[18px]">✕</span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-4 mt-[6px] sm:mt-1 ">
                  <div className="flex items-center gap-2 text-secondary">
                    <span className="material-symbols-outlined text-secondary font-bold !text-[15px] sm:!text-base">
                      location_on
                    </span>
                    <span className=" !text-[11px] sm:!text-sm text-white">
                      {selectedJob.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-secondary">
                    <span className="material-symbols-outlined text-secondary font-bold !text-[15px] sm:!text-base">
                      work
                    </span>
                    <span className=" !text-[11px] sm:!text-sm text-white">
                      {selectedJob.employmentType}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-secondary">
                    <span className="material-symbols-outlined text-secondary font-bold !text-[15px] sm:!text-base">
                      schedule
                    </span>
                    <span className=" !text-[11px] sm:!text-sm text-white">
                      {selectedJob.experience}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-2 px-2 sm:px-6 sm:py-6">
              <div
                className="w-full h-44 sm:h-64 bg-center bg-cover rounded-xl mb-3 sm:mb-6"
                style={{ backgroundImage: `url("${selectedJob.image}")` }}
              ></div>

              <div className="mb-3 sm:mb-6">
                <h4 className="text-secondary text-[16px] sm:text-[20px] font-bold mb-3 border-l-4 border-black pl-3">
                  Job Description
                </h4>
                <p className="text-white/70 leading-relaxed text-[12px] sm:text-[14px]">
                  {selectedJob.description}
                </p>
              </div>

              <div className="mb-3 sm:mb-6">
                <h4 className="text-secondary text-[16px] sm:text-[20px] font-bold mb-3 border-l-4 border-black pl-3">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {selectedJob.keyResponsibilities.map(
                    (item: string, index: number) => (
                      <li
                        key={index}
                        className="text-white/70 flex  items-start gap-2"
                      >
                        <span className="text-white text-[12px] sm:text-[14px] sm:mt-1">
                          •
                        </span>
                        <span className="text-[12px] sm:text-[14px]">
                          {item}
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="mb-3 sm:mb-6">
                <h4 className="text-secondary text-[16px] sm:text-[20px] font-bold mb-3 border-l-4 border-black pl-3">
                  Requirements
                </h4>
                <ul className="space-y-2">
                  {selectedJob.requirements.map(
                    (item: string, index: number) => (
                      <li
                        key={index}
                        className="text-white/70 flex items-start gap-2"
                      >
                        <span className="text-white text-[12px] sm:text-[14px] sm:mt-1">
                          •
                        </span>
                        <span className="text-[12px] sm:text-[14px]">
                          {item}
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-8 mb-3 sm:mb-1">
                <button
                  onClick={() => {
                    setSelectedJob(null);
                    setOpenCVModal(true);
                  }}
                  className="flex-1 py-2 sm:py-3 rounded-lg bg-primary text-white cursor-pointer font-bold transition-all"
                >
                  Apply Now
                </button>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="flex-1 bg-black py-2 sm:py-3 rounded-lg border cursor-pointer border-white/10 text-white font-bold hover:bg-black/70 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CV Submission Section */}
      <section className="px-6 md:px-20 lg:px-40 py-20 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[rgb(20,20,184)]/5 pointer-events-none"></div>

        <div className="mx-auto max-w-[1200px] relative z-10">
          <div className="bg-white border border-[rgba(20_49_117)]/60 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto shadow-xl">
            <span className="material-symbols-outlined text-6xl text-primary mb-6">
              cloud_upload
            </span>

            <h2 className="text-[rgba(20_49_117)] text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter">
              Submit Your CV
            </h2>

            <p className="text-slate-600 text-base md:text-lg mb-10 max-w-xl mx-auto">
              Don&apos;t see a role that fits? Upload your CV and we&apos;ll
              contact you when a suitable position becomes available in our
              fleet operations.
            </p>

            <button
              onClick={() => setOpenCVModal(true)}
              className="h-14 px-3 cursor-pointer sm:px-12 bg-primary text-nowrap text-sm sm:text-bse hover:bg-[#0a0f1d]/90 text-secondary font-black rounded-xl transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined">description</span>
              SUBMIT YOUR PROFILE
            </button>
          </div>
        </div>
      </section>

      {openCVModal && (
        <CVSubmissionModal
          isOpen={openCVModal}
          onClose={() => setOpenCVModal(false)}
        />
      )}
    </>
  );
};

export default CareerContent;

function CVSubmissionModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState<JobFormData>({
    fullName: "",
    phoneNo: "",
    email: "",
    introduction: "",
    cvFile: null,
  });

  const [fileName, setFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { submitForm, isSubmitting, submitStatus, resetStatus } = useFormSubmit(
    "job",
    {
      onSuccess: () => {
        setFormData({
          fullName: "",
          phoneNo: "",
          email: "",
          introduction: "",
          cvFile: null,
        });
        setFileName("");
        resetStatus();
      },
    },
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev: any) => ({
        ...prev,
        cvFile: file,
      }));
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.introduction) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!formData.cvFile) {
      toast.error("Please upload your CV");
      return;
    }

    await submitForm(formData);

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-xl p-8 relative shadow-2xl animate-fadeIn max-h-[90vh] overflow-y-auto [scrollbar-width:none]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 text-[#0a0f1d] hover:text-black text-2xl"
        >
          ✕
        </button>

        <h3 className="text-2xl font-black text-slate-900 mb-2">
          Submit Your CV
        </h3>

        <p className="text-slate-600 text-sm mb-6">
          Apply for roles not currently listed on our careers page.
        </p>

        {/* Status Message */}
        {submitStatus && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Name"
              required
              className="w-full h-12 bg-slate-50 border border-slate-400 rounded-lg px-4
                focus:ring-2 focus:ring-[#0a0f1d] outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Phone No *
            </label>
            <input
              type="tel"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              required
              className="w-full h-12 bg-slate-50 border border-slate-400 rounded-lg px-4
                focus:ring-2 focus:ring-[#0a0f1d] outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="w-full h-12 bg-slate-50 border border-slate-400 rounded-lg px-4
                focus:ring-2 focus:ring-[#0a0f1d] outline-none transition-colors"
            />
          </div>

          {/* Introduction */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Short Introduction *
            </label>
            <textarea
              name="introduction"
              value={formData.introduction}
              onChange={handleChange}
              rows={4}
              placeholder="Briefly describe your experience, skills, and the type of role you're interested in..."
              required
              className="w-full bg-slate-50 border border-slate-400 rounded-lg px-4 py-3 resize-none
                focus:ring-2 focus:ring-[#0a0f1d] outline-none transition-colors"
            />
          </div>

          {/* CV Upload */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Upload CV *
            </label>
            <div className="relative">
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                required
              />
              <div className="border-2 border-dashed border-slate-400 rounded-lg p-4 text-center hover:border-[#0a0f1d] transition-colors">
                {fileName ? (
                  <div className="text-slate-700">
                    <span className="material-symbols-outlined text-[#0a0f1d] mr-2">
                      description
                    </span>
                    {fileName}
                    <button
                      type="button"
                      onClick={() => {
                        setFormData((prev: any) => ({ ...prev, cvFile: null }));
                        setFileName("");
                        if (fileInputRef.current) {
                          fileInputRef.current.value = "";
                        }
                      }}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="text-slate-600">
                    <span className="material-symbols-outlined text-2xl mb-2">
                      cloud_upload
                    </span>
                    <p className="text-sm">
                      Click to upload CV (PDF, DOC, DOCX)
                    </p>
                    <p className="text-xs text-slate-400 mt-1">Max size: 5MB</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-primary text-secondary font-bold rounded-lg hover:bg-[#0a0f1d]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </button>
        </form>

        <p className="text-xs text-slate-400 mt-4 text-center">
          Accepted formats: PDF, DOC, DOCX • Max size: 5MB
        </p>
      </div>
    </div>
  );
}
