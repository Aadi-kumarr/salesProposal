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
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">EXPERT PROPOSAL GENERATOR</h1>
          <p className="text-gray-500">Font: PSPRMS</p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500">LOGO</span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Company Section */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">COMPANY INFORMATION</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                  COMPANY NAME:
                </label>
                <input
                  type="text"
                  id="companyName"
                  {...register('companyName', { required: 'Company name is required' })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                />
                {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>}
              </div>

              <div>
                <label htmlFor="companyIndustry" className="block text-sm font-medium text-gray-700">
                  INDUSTRY
                </label>
                <input
                  type="text"
                  id="companyIndustry"
                  {...register('companyIndustry')}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="companyWebsite" className="block text-sm font-medium text-gray-700">
                  WEBSITE LINK:
                </label>
                <input
                  type="url"
                  id="companyWebsite"
                  {...register('companyWebsite')}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
          </div>

          {/* Client Section */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">CLIENT INFORMATION</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">
                  CLIENT NAME:
                </label>
                <input
                  type="text"
                  id="clientName"
                  {...register('clientName', { required: 'Client name is required' })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                />
                {errors.clientName && <p className="mt-1 text-sm text-red-600">{errors.clientName.message}</p>}
              </div>

              <div>
                <label htmlFor="clientIndustry" className="block text-sm font-medium text-gray-700">
                  INDUSTRY
                </label>
                <input
                  type="text"
                  id="clientIndustry"
                  {...register('clientIndustry')}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="clientWebsite" className="block text-sm font-medium text-gray-700">
                  WEBSITE LINK:
                </label>
                <input
                  type="url"
                  id="clientWebsite"
                  {...register('clientWebsite')}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
          </div>

          {/* Proposal Details */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">PROPOSAL DETAILS</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="proposalType" className="block text-sm font-medium text-gray-700">
                  TYPE OF PROPOSAL:
                </label>
                <select
                  id="proposalType"
                  {...register('proposalType', { required: 'Proposal type is required' })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option value="">Select a type</option>
                  <option value="Business Proposal">Business Proposal</option>
                  <option value="Project Proposal">Project Proposal</option>
                  <option value="Research Proposal">Research Proposal</option>
                  <option value="Grant Proposal">Grant Proposal</option>
                  <option value="Other">Other</option>
                </select>
                {errors.proposalType && <p className="mt-1 text-sm text-red-600">{errors.proposalType.message}</p>}
              </div>

              <div>
                <label htmlFor="proposalPrompt" className="block text-sm font-medium text-gray-700">
                  PROMPT
                </label>
                <textarea
                  id="proposalPrompt"
                  rows={4}
                  {...register('proposalPrompt', { required: 'Prompt is required' })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                />
                {errors.proposalPrompt && <p className="mt-1 text-sm text-red-600">{errors.proposalPrompt.message}</p>}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
          <button
            type="submit"
            className="bg-primary text-black font-bold py-2 px-6 rounded-md border-2 border-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
            >
            Generate Proposal
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProposalForm;