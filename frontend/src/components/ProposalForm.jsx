import { useForm } from 'react-hook-form';
import axios from 'axios';

const ProposalForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/proposals', data);
      console.log('Proposal saved:', response.data);
      alert('Proposal submitted successfully!');
    } catch (error) {
      console.error('Error saving proposal:', error);
      alert('Failed to submit proposal');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Logo */}
        <div className="text-center mb-12">
          <div className="mx-auto w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">EXPERT PROPOSAL GENERATOR</h1>
          <p className="text-gray-500 uppercase text-sm tracking-wider">Professional Business Solutions</p>
        </div>

        {/* Main Form Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <form onSubmit={handleSubmit(onSubmit)} className="p-8">
            {/* Company and Client Side-by-Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* Company Section */}
              <div className="space-y-6">
                <div className="pb-6">
                  <h2 className="text-lg font-semibold text-gray-800 flex items-center mb-4 border-b border-gray-200 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H5a1 1 0 010-2V4zm3 1h2v2H7V5zm0 4h2v2H7V9zm0 4h2v2H7v-2z" clipRule="evenodd" />
                    </svg>
                    COMPANY INFORMATION
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        {...register('companyName', { required: 'Company name is required' })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                        placeholder="Enter company name"
                      />
                      {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="companyIndustry" className="block text-sm font-medium text-gray-700 mb-1">
                        Industry
                      </label>
                      <input
                        type="text"
                        id="companyIndustry"
                        {...register('companyIndustry')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                        placeholder="Enter industry"
                      />
                    </div>

                    <div>
                      <label htmlFor="companyWebsite" className="block text-sm font-medium text-gray-700 mb-1">
                        Website
                      </label>
                      <div className="flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          https://
                        </span>
                        <input
                          type="text"
                          id="companyWebsite"
                          {...register('companyWebsite')}
                          className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="yourcompany.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Section */}
              <div className="space-y-6">
                <div className="pb-6">
                  <h2 className="text-lg font-semibold text-gray-800 flex items-center mb-4 border-b border-gray-200 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    CLIENT INFORMATION
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 mb-1">
                        Client Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="clientName"
                        {...register('clientName', { required: 'Client name is required' })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                        placeholder="Enter client name"
                      />
                      {errors.clientName && <p className="mt-1 text-sm text-red-600">{errors.clientName.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="clientIndustry" className="block text-sm font-medium text-gray-700 mb-1">
                        Industry
                      </label>
                      <input
                        type="text"
                        id="clientIndustry"
                        {...register('clientIndustry')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                        placeholder="Enter industry"
                      />
                    </div>

                    <div>
                      <label htmlFor="clientWebsite" className="block text-sm font-medium text-gray-700 mb-1">
                        Website
                      </label>
                      <div className="flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          https://
                        </span>
                        <input
                          type="text"
                          id="clientWebsite"
                          {...register('clientWebsite')}
                          className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="clientcompany.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proposal Details */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
                PROPOSAL DETAILS
              </h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="proposalType" className="block text-sm font-medium text-gray-700 mb-1">
                    Type of Proposal <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="proposalType"
                    {...register('proposalType', { required: 'Proposal type is required' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                  >
                    <option value="">Select proposal type</option>
                    <option value="Business Proposal">Business Proposal</option>
                    <option value="Project Proposal">Project Proposal</option>
                    <option value="Research Proposal">Research Proposal</option>
                    <option value="Grant Proposal">Grant Proposal</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.proposalType && <p className="mt-1 text-sm text-red-600">{errors.proposalType.message}</p>}
                </div>

                <div>
                  <label htmlFor="proposalPrompt" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="proposalPrompt"
                    rows={6}
                    {...register('proposalPrompt', { required: 'Project details are required' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                    placeholder="Describe the project scope, objectives, and requirements..."
                  ></textarea>
                  {errors.proposalPrompt && <p className="mt-1 text-sm text-red-600">{errors.proposalPrompt.message}</p>}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-10 flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
              >
                Generate Professional Proposal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProposalForm;